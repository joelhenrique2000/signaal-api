/*
  Warnings:

  - You are about to drop the `Cidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Estado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pais` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Cidade` DROP FOREIGN KEY `Cidade_estadoId_fkey`;

-- DropForeignKey
ALTER TABLE `Endereco` DROP FOREIGN KEY `Endereco_cidadeId_fkey`;

-- DropForeignKey
ALTER TABLE `Estado` DROP FOREIGN KEY `Estado_paisId_fkey`;

-- DropTable
DROP TABLE `Cidade`;

-- DropTable
DROP TABLE `Endereco`;

-- DropTable
DROP TABLE `Estado`;

-- DropTable
DROP TABLE `Pais`;
