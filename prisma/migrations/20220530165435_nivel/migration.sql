-- CreateTable
CREATE TABLE `Nivel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroNivel` INTEGER NOT NULL,
    `qtdPontosNecessario` INTEGER NOT NULL,
    `nomeNivel` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Nivel_numeroNivel_key`(`numeroNivel`),
    UNIQUE INDEX `Nivel_qtdPontosNecessario_key`(`qtdPontosNecessario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
