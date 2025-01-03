"use client";

import { checkData, detailData, setUpdateData } from "@/app/models/mahasiswa";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function EditPage({ params }: { params: { npm: string } }) {
  // buat hook ("use state")
  // nilai awal tipe object
  const [getValue, setValue] = useState({});
  // buat hook (use state)
  // untuk baca nilai input
  const [getNPM, setNPM] = useState("");
  const [getNama, setNama] = useState("");
  const [getProdi, setProdi] = useState("");
  const [getCheck, setCheck] = useState({});

  const refNPM = useRef<HTMLInputElement>(null);
  const refNama = useRef<HTMLInputElement>(null);
  const refProdi = useRef<HTMLSelectElement>(null);

  // buat fungsi untuk respon getData
  async function fetchData() {
    // isi nilai "setValue"
    setValue(await detailData(atob(decodeURIComponent(params.npm))));
  }

  // buat hook ("use effect")
  useEffect(() => {
    // panggil fungsi "fetchData"
    fetchData();
  }, []);

  const getCheckData = async (npm: string) => {
    setCheck(await checkData(npm));
  };

  // buat fungsi untuk ubah data
  const editData = async () => {
    // let npm: string = "";
    let npm, nama, prodi;

    getNPM == "" ? (npm = refNPM.current?.value) : (npm = getNPM);
    getNama == "" ? (nama = refNama.current?.value) : (nama = getNama);
    getProdi == "" ? (prodi = refProdi.current?.value) : (prodi = getProdi);

    npm == "" || nama == "" || prodi == ""
      ? [alert("Seluruh Data Harus Diisi !")]
      : [
          Object.values(getCheck)?.length == 0
            ? [
                await setUpdateData(
                  String(npm),
                  String(nama),
                  String(prodi),
                  atob(decodeURIComponent(params.npm))
                ),
                alert("Data Berhasil Diubah"),
                (location.href = `/edit/` + btoa(String(npm))),
              ]
            : alert("NPM Sudah Pernah Tersimpan !"),
        ];
  };

  return (
    <>
      <title>Ubah Data Mahasiswa</title>

      {Object.values(getValue)?.map((data: any, index: number) => (
        <div key={index} className="grid grid-cols-12 gap-4 items-center">
          <div className="col-start-1">
            <label htmlFor="">NPM</label>
          </div>
          <div className="col-span-3">
            <input
              type="text"
              placeholder="Isi NPM"
              maxLength={8}
              className="input input-bordered input-success w-full"
              defaultValue={data.npm}
              onChange={(e) => {
                setNPM(e.target.value);
                getCheckData(e.target.value);
              }}
              ref={refNPM}
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
              defaultValue={data.nama}
              onChange={(e) => {
                setNama(e.target.value);
              }}
              ref={refNama}
            />
          </div>
          <div className="col-start-1">
            <label htmlFor="">Program Studi</label>
          </div>
          <div className="col-span-3">
            <select
              defaultValue={data.prodi}
              className="select select-success w-full"
              onChange={(e) => {
                setProdi(e.target.value);
              }}
              ref={refProdi}>
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
              onClick={editData}>
              Ubah
            </button>
            <Link href={"/"} className="btn btn-active ml-5 w-36">
              Batal
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
