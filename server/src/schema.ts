import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { UserEvent } from "@tiny-track/common";

export const userEvent = sqliteTable("user_event", {
  id: integer("id").primaryKey(),
  type: text("type").notNull(),
  timestamp: text("timestamp").notNull(),
  url: text("url").notNull(),
  elementType: text("elementType"),
  elementId: text("elementId"),
  elementClass: text("elementClass"),
  maxScrollDepth: integer("maxScrollDepth"),
  duration: integer("duration"),
});

export const users = sqliteTable("users", {
  email: text("email").primaryKey(),
  uuid: integer("uuid"),
  password: text("password").notNull(),
  telegram_key: text("telegram_key"),
});
