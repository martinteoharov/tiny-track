import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import { UserEvent } from "./entities";

const app = express();
app.use(express.json());

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [UserEvent],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to Database via TypeORM");

    app.post("/track", async (req, res) => {
      try {
        const event = new UserEvent();
        event.type = req.body.type;
        event.timestamp = req.body.timestamp;
        event.url = req.body.url;
        event.elementType = req.body.elementType;
        event.elementId = req.body.elementId;
        event.elementClass = req.body.elementClass;
        event.maxScrollDepth = req.body.maxScrollDepth;
        event.duration = req.body.duration;

        await AppDataSource.manager.save(event);

        res.json({ message: "Event tracked successfully" });
      } catch (error) {
        console.error("Error inserting event data", error);
        res.status(500).json({ message: "Failed to track event" });
      }
    });
  })
  .catch((error) => console.error("Error connecting to the database", error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
