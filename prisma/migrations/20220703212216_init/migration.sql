-- CreateTable
CREATE TABLE `usertest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(250) NOT NULL,
    `lastName` VARCHAR(250) NOT NULL,
    `email` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
