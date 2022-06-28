/*
  Warnings:

  - You are about to drop the column `licaoId` on the `Assunto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Assunto` DROP FOREIGN KEY `Assunto_licaoId_fkey`;

-- AlterTable
ALTER TABLE `Assunto` DROP COLUMN `licaoId`;

-- AlterTable
ALTER TABLE `Licao` ADD COLUMN `assuntoId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Licao` ADD CONSTRAINT `Licao_assuntoId_fkey` FOREIGN KEY (`assuntoId`) REFERENCES `Assunto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
