-- CreateTable
CREATE TABLE `tb_penilaian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nilai` DOUBLE NOT NULL,
    `id_mahasiswa` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_penilaian` ADD CONSTRAINT `tb_penilaian_id_mahasiswa_fkey` FOREIGN KEY (`id_mahasiswa`) REFERENCES `tb_mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
