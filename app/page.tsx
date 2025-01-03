"use client";

import React, { useEffect, useState } from "react";

// import fontawesome (icon)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getData, setDeleteData, setUpdateStatus } from "./models/mahasiswa";

export default function MainPage() {
  // buat hook ("use state")
  // nilai awal tipe object
  const [getValue, setValue] = useState({});

  // buat fungsi untuk respon getData
  async function fetchData() {
    // isi nilai "setValue"
    setValue(await getData());
  }

  // buat hook ("use effect")
  useEffect(() => {
    // panggil fungsi "fetchData"
    fetchData();
  }, []);

  // buat fungsi hapus data
  async function setDelete(npm: string, nama: string) {
    // alert("Hapus");
    if (confirm(`Data Mahasiswa : ${npm} - ${nama} Ingin Dihapus ?`) == true) {
      await setUpdateStatus(npm);
      // await setDeleteData(npm);
      alert(`Data Mahasiswa : ${npm} - ${nama} Berhasil Dihapus`);
      // reload otomatis
      location.reload();
    }
    // else
    // {
    //   alert("Tombol Cancel");
    // }
  }

  return (
    <>
      <title>View Data Mahasiswa</title>

      <nav className="mb-2.5 text-right">
        <Link href={"/add"}>
          <button className="btn btn-outline btn-info">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            Tambah Data Mahasiswa
          </button>
        </Link>
      </nav>

      {/* <FontAwesomeIcon icon={faPen} size="1x" bounce></FontAwesomeIcon> */}
      {/* tampilkan data mahasiswa */}
      <table className="w-full">
        <thead>
          <tr className="bg-cyan-600 h-40 text-white">
            <th className="w-10% border border-black">Aksi</th>
            <th className="w-10% border border-black">NPM</th>
            <th className="w-50% border border-black">Nama</th>
            <th className="w-30% border border-black">Prodi</th>
          </tr>
        </thead>

        <tbody>
          {Object.values(getValue)?.map((data: any, index: number) => (
            <tr key={index}>
              <td className="text-center border border-black px-2.5 py-1">
                <Link
                  href={`/edit/${btoa(data.npm)}`}
                  className="px-2 py-1 bg-emerald-600 text-white rounded mr-0.5 text-xs"
                  title="Ubah Data">
                  <FontAwesomeIcon icon={faPen} size="1x"></FontAwesomeIcon>
                </Link>

                <Link
                  href={"/"}
                  className="px-2 py-1 bg-rose-500 text-white rounded ml-0.5 text-xs"
                  title="Hapus Data"
                  onClick={() => {
                    setDelete(data.npm, data.nama);
                  }}>
                  <FontAwesomeIcon icon={faTrash} size="1x"></FontAwesomeIcon>
                </Link>
              </td>
              <td className="text-center border border-black px-2.5">
                {data.npm}
              </td>
              <td className="text-justify border border-black px-2.5">
                {data.nama}
              </td>
              <td className="text-center border border-black px-2.5">
                {data.prodi}
              </td>
            </tr>
          ))}

          {/* {mahasiswa?.npm} */}
        </tbody>
      </table>
    </>
  );
}
