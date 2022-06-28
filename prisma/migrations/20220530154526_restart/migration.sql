/*
  Warnings:

  - You are about to drop the `Arquivo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArquivoExercicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Assunto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exercicio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FotoPerfil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Licao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LicaoIcone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nivel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resposta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioHasRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuariosOnExercicios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ArquivoExercicio` DROP FOREIGN KEY `ArquivoExercicio_arquivoId_fkey`;

-- DropForeignKey
ALTER TABLE `ArquivoExercicio` DROP FOREIGN KEY `ArquivoExercicio_exercicioId_fkey`;

-- DropForeignKey
ALTER TABLE `Assunto` DROP FOREIGN KEY `Assunto_licaoId_fkey`;

-- DropForeignKey
ALTER TABLE `Exercicio` DROP FOREIGN KEY `Exercicio_licaoId_fkey`;

-- DropForeignKey
ALTER TABLE `FotoPerfil` DROP FOREIGN KEY `FotoPerfil_arquivoId_fkey`;

-- DropForeignKey
ALTER TABLE `FotoPerfil` DROP FOREIGN KEY `FotoPerfil_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `Licao` DROP FOREIGN KEY `Licao_licaoIconeId_fkey`;

-- DropForeignKey
ALTER TABLE `LicaoIcone` DROP FOREIGN KEY `LicaoIcone_arquivoId_fkey`;

-- DropForeignKey
ALTER TABLE `Resposta` DROP FOREIGN KEY `Resposta_exercicioId_fkey`;

-- DropForeignKey
ALTER TABLE `Usuario` DROP FOREIGN KEY `Usuario_enderecoId_fkey`;

-- DropForeignKey
ALTER TABLE `Usuario` DROP FOREIGN KEY `Usuario_nivelId_fkey`;

-- DropForeignKey
ALTER TABLE `UsuarioHasRole` DROP FOREIGN KEY `UsuarioHasRole_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `UsuarioHasRole` DROP FOREIGN KEY `UsuarioHasRole_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `UsuariosOnExercicios` DROP FOREIGN KEY `UsuariosOnExercicios_exercicioId_fkey`;

-- DropForeignKey
ALTER TABLE `UsuariosOnExercicios` DROP FOREIGN KEY `UsuariosOnExercicios_usuarioId_fkey`;

-- DropTable
DROP TABLE `Arquivo`;

-- DropTable
DROP TABLE `ArquivoExercicio`;

-- DropTable
DROP TABLE `Assunto`;

-- DropTable
DROP TABLE `Exercicio`;

-- DropTable
DROP TABLE `FotoPerfil`;

-- DropTable
DROP TABLE `Licao`;

-- DropTable
DROP TABLE `LicaoIcone`;

-- DropTable
DROP TABLE `Nivel`;

-- DropTable
DROP TABLE `Resposta`;

-- DropTable
DROP TABLE `Role`;

-- DropTable
DROP TABLE `Usuario`;

-- DropTable
DROP TABLE `UsuarioHasRole`;

-- DropTable
DROP TABLE `UsuariosOnExercicios`;
