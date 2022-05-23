-- DropForeignKey
ALTER TABLE `Licao` DROP FOREIGN KEY `Licao_licaoIconeId_fkey`;

-- AlterTable
ALTER TABLE `Licao` MODIFY `licaoIconeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Licao` ADD CONSTRAINT `Licao_licaoIconeId_fkey` FOREIGN KEY (`licaoIconeId`) REFERENCES `LicaoIcone`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
