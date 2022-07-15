/*
  Warnings:

  - Added the required column `phone` to the `userreg` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `userreg` ADD COLUMN `phone` VARCHAR(250) NOT NULL;
