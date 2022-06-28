/*
  Warnings:

  - A unique constraint covering the columns `[licaoIconeId]` on the table `Licao` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Licao` ADD COLUMN `licaoIconeId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Arquivo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeOriginal` VARCHAR(191) NOT NULL,
    `mimetype` VARCHAR(191) NOT NULL,
    `caminho` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FotoPerfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `arquivoId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,

    UNIQUE INDEX `FotoPerfil_arquivoId_key`(`arquivoId`),
    UNIQUE INDEX `FotoPerfil_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArquivoExercicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `arquivoId` INTEGER NOT NULL,
    `exercicioId` INTEGER NOT NULL,

    UNIQUE INDEX `ArquivoExercicio_arquivoId_key`(`arquivoId`),
    UNIQUE INDEX `ArquivoExercicio_exercicioId_key`(`exercicioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LicaoIcone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `arquivoId` INTEGER NOT NULL,

    UNIQUE INDEX `LicaoIcone_arquivoId_key`(`arquivoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuariosOnExercicios` (
    `exercicioId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,
    `isAcertou` BOOLEAN NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,
    `removidoEm` DATETIME(3) NOT NULL,

    PRIMARY KEY (`exercicioId`, `usuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nomeNormalizado` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Role_nome_key`(`nome`),
    UNIQUE INDEX `Role_nomeNormalizado_key`(`nomeNormalizado`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuarioHasRole` (
    `roleId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,
    `isAtivo` BOOLEAN NOT NULL,

    PRIMARY KEY (`roleId`, `usuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `genero` CHAR(1) NOT NULL,
    `emailConfirmado` BOOLEAN NOT NULL DEFAULT false,
    `primeiroNome` VARCHAR(255) NOT NULL,
    `segundoNome` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(30) NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,
    `removidoEm` DATETIME(3) NULL,
    `enderecoId` INTEGER NOT NULL,
    `nivelId` INTEGER NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    UNIQUE INDEX `Usuario_enderecoId_key`(`enderecoId`),
    UNIQUE INDEX `Usuario_nivelId_key`(`nivelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Licao_licaoIconeId_key` ON `Licao`(`licaoIconeId`);

-- AddForeignKey
ALTER TABLE `FotoPerfil` ADD CONSTRAINT `FotoPerfil_arquivoId_fkey` FOREIGN KEY (`arquivoId`) REFERENCES `Arquivo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FotoPerfil` ADD CONSTRAINT `FotoPerfil_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArquivoExercicio` ADD CONSTRAINT `ArquivoExercicio_arquivoId_fkey` FOREIGN KEY (`arquivoId`) REFERENCES `Arquivo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArquivoExercicio` ADD CONSTRAINT `ArquivoExercicio_exercicioId_fkey` FOREIGN KEY (`exercicioId`) REFERENCES `Exercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LicaoIcone` ADD CONSTRAINT `LicaoIcone_arquivoId_fkey` FOREIGN KEY (`arquivoId`) REFERENCES `Arquivo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Licao` ADD CONSTRAINT `Licao_licaoIconeId_fkey` FOREIGN KEY (`licaoIconeId`) REFERENCES `LicaoIcone`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuariosOnExercicios` ADD CONSTRAINT `UsuariosOnExercicios_exercicioId_fkey` FOREIGN KEY (`exercicioId`) REFERENCES `Exercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuariosOnExercicios` ADD CONSTRAINT `UsuariosOnExercicios_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioHasRole` ADD CONSTRAINT `UsuarioHasRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuarioHasRole` ADD CONSTRAINT `UsuarioHasRole_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_nivelId_fkey` FOREIGN KEY (`nivelId`) REFERENCES `Nivel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
