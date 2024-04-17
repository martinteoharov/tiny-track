import express from "express";
import { sql } from "drizzle-orm";
import { db } from "./db";
import * as schema from "./schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

if (!Bun.env.JWT_SECRET) {
  console.warn("WARN: JWT_SECRET is not defined in the environment variables.");
}

const app = express();
app.use(express.json());

app.use((_req, res, next) => {
  for (const x of ["Origin", "Methods", "Headers"]) {
    res.setHeader(`Access-Control-Allow-${x}`, "*");
  }
  next();
});

app.options("*", (_req, res) => res.sendStatus(200));

/* --- Dashboard --- */

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { email, password: hashedPassword };
    await db.insert(schema.users).values(newUser);
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send("Error registering new user");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await db
      .select()
      .from(schema.users)
      .where(sql`email = ${email}`)
      .execute();

    if (users.length === 0 || users[0] === null) {
      return res.status(401).send("Invalid credentials");
    }

    const user = users[0];

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user.email }, Bun.env.JWT_SECRET || "", {
        expiresIn: "1d",
      });
      res.json({ token });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send("Login error");
  }
});

/* --- Tracker --- */

app.post("/track", async (req, res) => {
  const event = {
    type: req.body.type,
    timestamp: req.body.timestamp,
    url: req.body.url,
    elementType: req.body.elementType,
    elementId: req.body.elementId,
    elementClass: req.body.elementClass,
    maxScrollDepth: req.body.maxScrollDepth,
    duration: req.body.duration,
  };

  await db.insert(schema.userEvent).values(event);
  return res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
