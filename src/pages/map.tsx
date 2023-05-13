import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <Head>
        <title>Карта · NekoWorlds</title>
        <meta name="description" content="Ванильный сервер для каждого пространство где уютно и лампово" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-title" content="NekoWorlds" />
        <meta property="og:site_name" content="NekoWorlds" />
        <meta property="og:title" content="Карта" />
        <meta property="og:description" content="Ванильный сервер для каждого пространство где уютно и лампово" />
        <meta property="og:image" content="/og_image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og_image.png" />
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
