import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database(process.env.DB_FILE || "sqlite.db");
export const db = drizzle(sqlite);
