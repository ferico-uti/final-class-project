"use server"
import { PrismaClient } from "@prisma/client";

// buat variabel "prisma"
const prisma = new PrismaClient();

// buat fungsi untuk tampil data mahasiswa
export async function getData() {
    // buat variabel
    // untuk tampil data mahasiswa
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
        where: {
            status: "Y",
            // prodi : {
            //   contains : "matik"
            // }
        },
    });

    return mahasiswa;
}

// buat fungsi (arrow function) untuk hapus data
// export async function setDelete()
export const setUpdateStatus = async (npm: string) => {
    // buat variabel
    // untuk ubah status data mahasiswa (Y >> T)
    await prisma.tb_mahasiswa.updateMany({
        where: {
            npm: npm,
        },
        data: {
            status: 'T',
        },
    });

}

export const setDeleteData = async (npm: string) => {
    // buat variabel
    // untuk hapus data mahasiswa
    await prisma.tb_mahasiswa.deleteMany({
        where: {
            npm: npm,
        },
    });
}

// buat fungsi untuk cek data mahasiswa (npm)
export const checkData = async (npm: string) => {
    // buat variabel
    // untuk cek data mahasiswa
    // berdasarkan npm
    const check = await prisma.tb_mahasiswa.findMany({
        select: {
            id: true,
        },
        where: {
            npm: npm,
        },
    });

    return check;
}

// buat fungsi untuk simpan data mahasiswa
export const setSaveData = async (npm: string, nama: string, prodi: string) => {
    await prisma.tb_mahasiswa.create({
        data: {
            npm: npm,
            nama: nama,
            prodi: prodi,
            status: 'Y',
        },
    })
}

// buat fungsi untuk tampil detail data mahasiswa (npm)
export const detailData = async (npm: string) => {
    // buat variabel
    // untuk cek data mahasiswa
    // berdasarkan npm
    const detail = await prisma.tb_mahasiswa.findMany({
        where: {
            npm: npm,
        },
    });

    return detail;
}

export const setUpdateData = async (npm: string, nama: string, prodi: string, npm_old: string) => {
    // buat variabel
    // untuk ubah status data mahasiswa (Y >> T)
    await prisma.tb_mahasiswa.updateMany({
        where: {
            npm: npm_old,                    
        },
        data: {
            npm: npm,
            nama: nama,
            prodi: prodi,
        },
    });

}