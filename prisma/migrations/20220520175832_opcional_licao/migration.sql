-- DropForeignKey
ALTER TABLE `Exercicio` DROP FOREIGN KEY `Exercicio_licaoId_fkey`;

-- AlterTable
ALTER TABLE `Exercicio` MODIFY `licaoId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Exercicio` ADD CONSTRAINT `Exercicio_licaoId_fkey` FOREIGN KEY (`licaoId`) REFERENCES `Licao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
