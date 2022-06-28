-- CreateTable
CREATE TABLE `Pais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sigla` VARCHAR(2) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
