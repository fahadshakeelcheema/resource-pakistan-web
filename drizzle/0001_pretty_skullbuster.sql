CREATE TABLE `inquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fullName` varchar(255) NOT NULL,
	`organization` varchar(255),
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`subject` varchar(100) NOT NULL,
	`message` text NOT NULL,
	`status` enum('new','reviewed','responded') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `inquiries_id` PRIMARY KEY(`id`)
);
