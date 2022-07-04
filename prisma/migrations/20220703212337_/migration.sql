/*
  Warnings:

  - You are about to drop the `usertest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `usertest`;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(250) NOT NULL,
    `lastName` VARCHAR(250) NOT NULL,
    `email` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
