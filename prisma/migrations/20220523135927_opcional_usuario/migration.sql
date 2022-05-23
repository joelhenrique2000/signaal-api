-- DropForeignKey
ALTER TABLE `Assunto` DROP FOREIGN KEY `Assunto_licaoId_fkey`;

-- AlterTable
ALTER TABLE `Assunto` MODIFY `licaoId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Usuario` MODIFY `atualizadoEm` DATETIME(3) NULL,
    MODIFY `removidoEm` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `Assunto` ADD CONSTRAINT `Assunto_licaoId_fkey` FOREIGN KEY (`licaoId`) REFERENCES `Licao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
