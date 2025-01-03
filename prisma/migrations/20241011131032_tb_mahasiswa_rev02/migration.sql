/*
  Warnings:

  - You are about to alter the column `prodi` on the `tb_mahasiswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE `tb_mahasiswa` MODIFY `prodi` VARCHAR(30) NOT NULL;
