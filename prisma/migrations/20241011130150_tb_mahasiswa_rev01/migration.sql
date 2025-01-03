-- CreateTable
CREATE TABLE `tb_mahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `npm` CHAR(8) NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `prodi` VARCHAR(50) NOT NULL,
    `status` ENUM('Y', 'T') NOT NULL DEFAULT 'Y',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
