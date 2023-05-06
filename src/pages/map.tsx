import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Карта</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="NekoWorlds › Карта" />
        <meta property="og:description" content="Ванильный сервер" />
        <meta property="og:image" content="/og_image.png" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mb-12 mt-24">
        <Header></Header>

        <figure className="mt-8 grid place-items-center rounded-xl bg-zinc-100/50 p-4 dark:bg-zinc-800/50 md:p-6">
          <iframe
            title="NekoWorlds › Карта"
            src="http://maps.nekocorp.gq:61128"
            width="100%"
            draggable="true"
            data-nimg="1"
            className="opacity-1 my-0 rounded-lg transition duration-500 [grid-area:1/1]"
            loading="lazy"
            height="650"
          ></iframe>
        </figure>
      </main>
    </>
  );
}
