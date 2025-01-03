"use client";

import Link from "next/link";
import React, { useState } from "react";
import { checkData, setSaveData } from "../models/mahasiswa";

export default function AddPage() {
  // buat hook (use state)
  // untuk baca nilai input
  const [getNPM, setNPM] = useState("");
  const [getNama, setNama] = useState("");
  const [getProdi, setProdi] = useState("");
  const [getCheck, setCheck] = useState({});

  // buat fungsi untuk ambil nilai
  // dari fungsi "checkData"
  const getCheckData = async (npm: string) => {
    setCheck(await checkData(npm));
  };

  // buat fungsi untuk simpan data
  const saveData = async () => {
    // if(getNPM == "")
    // {
    //   alert("NPM Harus Diisi");
    // }
    // else
    // {
    //   alert(getNPM);
    //   alert("Oke");
    // }

    // getCheckData(getNPM);

    // setCheck(await checkData(getNPM));

    // ternary operator
    getNPM == "" || getNama == "" || getProdi == ""
      ? [alert("Seluruh Data Harus Diisi !")]
      : [
          Object.values(getCheck)?.length == 0
            ? [
                await setSaveData(getNPM, getNama, getProdi),
                alert("Data Berhasil Disimpan"),
                location.reload(),
              ]
            : alert("NPM Sudah Pernah Tersimpan !"),
        ];
  };

  return (
    <div>
      <title>Tambah Data Mahasiswa</title>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-start-1">
          <label htmlFor="">NPM</label>
        </div>
        <div className="col-span-3">
          <input
            type="text"
            placeholder="Isi NPM"
            maxLength={8}
            className="input input-bordered input-success w-full"
            onChange={(e) => {
              setNPM(e.target.value);
              getCheckData(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">
          <label htmlFor="">Nama</label>
        </div>
        <div className="col-span-3">
          <input
            type="text"
            placeholder="Isi Nama Mahasiswa"
            maxLength={100}
            className="input input-bordered input-success w-full"
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
        </div>
        <div className="col-start-1">
          <label htmlFor="">Program Studi</label>
        </div>
        <div className="col-span-3">
          <select
            defaultValue={""}
            className="select select-success w-full"
            onChange={(e) => {
              setProdi(e.target.value);
            }}>
            <option value={""} disabled>
              Pilih Jurusan Mahasiswa
            </option>
            <option value={"Informatika"}>Informatika</option>
            <option value={"Sistem Informasi"}>Sistem Informasi</option>
            <option value={"Teknologi Informasi"}>Teknologi Informasi</option>
            <option value={"Teknik Komputer"}>Teknik Komputer</option>
          </select>
        </div>

        <div className="col-start-2 col-span-3">
          <button
            className="btn btn-active btn-accent mr-5 w-36"
            onClick={saveData}>
            Simpan
          </button>
          <Link href={"/"} className="btn btn-active ml-5 w-36">
            Batal
          </Link>
        </div>
      </div>
    </div>
  );
}
