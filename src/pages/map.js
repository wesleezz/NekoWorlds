import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter, Manrope } from "@next/font/google";
import styles from "../styles/Rules.module.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Карта</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mt-24 mb-12">
        <Header></Header>
        <iframe
          title="NekoWorlds › Карта"
          src="https://maps.nekocorp.gq:61128"
          width="100%"
          height="650"
        ></iframe>
      </main>
    </>
  );
}
