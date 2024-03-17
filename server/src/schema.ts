import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

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
