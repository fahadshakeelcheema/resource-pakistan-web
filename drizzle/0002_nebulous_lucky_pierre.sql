ALTER TABLE `inquiries` MODIFY COLUMN `status` enum('new','in_progress','resolved') NOT NULL DEFAULT 'new';--> statement-breakpoint
ALTER TABLE `inquiries` ADD `adminNotes` text;