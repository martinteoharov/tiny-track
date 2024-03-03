import express from "express";
import sqlite3 from "sqlite3";

const app = express();
app.use(express.json());

const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("Error opening database", err);
  } else {
    console.log("Database opened successfully");
  }
});

app.post("/track", async (req, res) => {
  const query = "INSERT INTO events (type, data) VALUES (?, ?)";
  const params = ["track", JSON.stringify(req.body)];

  db.run(query, params, function (err) {
    if (err) {
      console.error("Error inserting event data", err);
      res.status(500).json({ message: "Failed to track event" });
    } else {
      res.json({ message: "Event tracked successfully" });
    }
  });
});

app.post("/track-page-info", async (req, res) => {
  const query = "INSERT INTO pageInfo (userId, browserInfo) VALUES (?, ?)";
  const params = [req.body.userId, JSON.stringify(req.body.browserInfo)];

  db.run(query, params, function (err) {
    if (err) {
      console.error("Error inserting page info", err);
      res.status(500).json({ message: "Failed to track page info" });
    } else {
      res.json({ message: "Page info tracked successfully" });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
