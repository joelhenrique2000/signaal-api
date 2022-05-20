/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Quote` DROP FOREIGN KEY `Quote_authorId_fkey`;

-- DropTable
DROP TABLE `Author`;

-- DropTable
DROP TABLE `Quote`;

-- CreateTable
CREATE TABLE `Pais` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sigla` VARCHAR(2) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sigla` VARCHAR(2) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `paisId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cidade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `estadoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(191) NOT NULL,
    `cidadeId` INTEGER NOT NULL,

    UNIQUE INDEX `Endereco_cidadeId_key`(`cidadeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `Resposta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enunciado` VARCHAR(191) NOT NULL,
    `isRespostaCerta` BOOLEAN NOT NULL,
    `exercicioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enunciado` VARCHAR(191) NOT NULL,
    `qtdPontosGanho` INTEGER NOT NULL,
    `licaoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assunto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `licaoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Licao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `licaoIconeId` INTEGER NOT NULL,

    UNIQUE INDEX `Licao_licaoIconeId_key`(`licaoIconeId`),
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
    `atualizadoEm` DATETIME(3) NOT NULL,
    `removidoEm` DATETIME(3) NOT NULL,
    `enderecoId` INTEGER NOT NULL,
    `nivelId` INTEGER NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    UNIQUE INDEX `Usuario_enderecoId_key`(`enderecoId`),
    UNIQUE INDEX `Usuario_nivelId_key`(`nivelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Estado` ADD CONSTRAINT `Estado_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cidade` ADD CONSTRAINT `Cidade_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `Estado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_cidadeId_fkey` FOREIGN KEY (`cidadeId`) REFERENCES `Cidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_exercicioId_fkey` FOREIGN KEY (`exercicioId`) REFERENCES `Exercicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercicio` ADD CONSTRAINT `Exercicio_licaoId_fkey` FOREIGN KEY (`licaoId`) REFERENCES `Licao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assunto` ADD CONSTRAINT `Assunto_licaoId_fkey` FOREIGN KEY (`licaoId`) REFERENCES `Licao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Licao` ADD CONSTRAINT `Licao_licaoIconeId_fkey` FOREIGN KEY (`licaoIconeId`) REFERENCES `LicaoIcone`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
