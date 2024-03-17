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
