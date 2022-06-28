-- CreateTable
CREATE TABLE `Resposta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enunciado` VARCHAR(191) NOT NULL,
    `isRespostaCerta` BOOLEAN NOT NULL,
    `exercicioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_exercicioId_fkey` FOREIGN KEY (`exercicioId`) REFERENCES `Exercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
