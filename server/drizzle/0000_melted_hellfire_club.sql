CREATE TABLE `user_event` (
	`id` integer PRIMARY KEY NOT NULL,
	`type` text NOT NULL,
	`timestamp` text NOT NULL,
	`url` text NOT NULL,
	`elementType` text,
	`elementId` text,
	`elementClass` text,
	`maxScrollDepth` integer,
	`duration` integer
);
--> statement-breakpoint
CREATE TABLE `users` (
	`email` text PRIMARY KEY NOT NULL,
	`uuid` integer,
	`password` text NOT NULL,
	`telegram_key` text
);
