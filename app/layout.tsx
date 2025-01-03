// import globals.css
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

// import fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body>
        {/* buat header */}
        <header>
          {/* <Image
      src="/logo.png"
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}

          {/* <img src={"../images/logo.png"} alt="Logo UTI" /> */}
          <Image
            src={"/images/logo.png"}
            alt="Logo UTI"
            width={320}
            height={60} priority></Image>
        </header>

        {/* buat menu */}
        <nav className="mt-2.5 text-center">
          <Link
            href={"/"}
            className="btn btn-active btn-accent mr-5 w-48">
            Data Mahasiswa
          </Link>
          <Link
            href={"/"}
            className="btn btn-active btn-accent ml-5 w-48">
            Log Data Mahasiswa
          </Link>
        </nav>

        {/* buat content/isi */}
        <section className="m-20px">{children}</section>

        {/* buat footer */}
        <footer className="flex justify-center items-center bg-cyan-600 text-white h-40">
          Copyright &copy; 2024 - Nama
        </footer>
      </body>
    </html>
  );
}
