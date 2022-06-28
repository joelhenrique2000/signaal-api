-- CreateTable
CREATE TABLE `Exercicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enunciado` VARCHAR(191) NOT NULL,
    `qtdPontosGanho` INTEGER NOT NULL,
    `licaoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Exercicio` ADD CONSTRAINT `Exercicio_licaoId_fkey` FOREIGN KEY (`licaoId`) REFERENCES `Licao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
