import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Контакты</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="NekoWorlds › Контакты" />
        <meta property="og:description" content="Ванильный сервер" />
        <meta property="og:image" content="/og_image.png" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mb-12 mt-24">
        <Header></Header>

        <figure className="mt-8 grid place-items-center rounded-xl bg-zinc-100/50 p-4 dark:bg-zinc-800/50 md:p-6">
          <iframe
            title="NekoWorlds › Карта"
            src="https://minerender.org/embed/skin/?skin=https://api.mineskin.org/render/texture/c4cf6767f2754fdaad03ffcff4153c36&autoResize=true&camera.position=-15,35,20&controls.pan=false&utm_source=mineskin&utm_medium=website&utm_campaign=skin_preview"
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
