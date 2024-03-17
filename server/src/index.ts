import { db } from "./db";
import * as schema from "./schema";
import express from "express";

const app = express();
app.use(express.json());

app.use((_req, res, next) => {
  for (const x of ["Origin", "Methods", "Headers"]) {
    res.setHeader(`Access-Control-Allow-${x}`, "*");
  }
  next();
});
app.options("*", (_req, res) => res.sendStatus(200));
app.post("/track", async (req, res) => {
  const event = {
    type: req.body.type,
    timestamp: req.body.timestamp,
    url: req.body.url,
    elementType: req.body.elementType,
    elementId: req.body.elementId,
    elementClass: req.body.elementClass,
    maxScrollDepth: req.body.maxScrollDepth,
    duration: req.body.duration
  }

  await db.insert(schema.userEvent).values(event);

  return res.sendStatus(200);
});

app.post("/track-page-info", async (req, res) => { });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
