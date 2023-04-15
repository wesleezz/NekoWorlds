import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter, Manrope } from "@next/font/google";
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

        <figure className="grid place-items-center rounded-xl mt-8 bg-zinc-100/50 p-4 dark:bg-zinc-800/50 md:p-6">
          <iframe
            title="NekoWorlds › Карта"
            src="http://maps.nekocorp.gq:61128"
            width="100%"
            draggable="true"
            data-nimg="1"
            className="transition duration-500 [grid-area:1/1] opacity-1 rounded-lg my-0"
            loading="lazy"
            height="650"
          ></iframe>
        </figure>
      </main>
    </>
  );
}
