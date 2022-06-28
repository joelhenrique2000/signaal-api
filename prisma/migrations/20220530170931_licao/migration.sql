-- AlterTable
ALTER TABLE `Assunto` ADD COLUMN `licaoId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Licao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Assunto` ADD CONSTRAINT `Assunto_licaoId_fkey` FOREIGN KEY (`licaoId`) REFERENCES `Licao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
