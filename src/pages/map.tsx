import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <Head>
        <title>Карта · NekoWorlds</title>
        <meta
          name="description"
          content="Ванильный сервер для каждого пространство где уютно и лампово"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-title" content="NekoWorlds" />
        <meta property="og:site_name" content="NekoWorlds" />
        <meta property="og:title" content="Карта" />
        <meta
          property="og:description"
          content="Ванильный сервер для каждого пространство где уютно и лампово"
        />
        <meta property="og:image" content="/og_image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og_image.png" />
      </Head>
      <main className="mb-12 mt-24">
        <Header></Header>

        <div className="mt-48 grid h-full items-center justify-center">
          <div className="grid place-items-center gap-5">
            <div className="grid place-items-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  alt=""
                  src="/emojis/heart_on_fire_3d.png"
                  width={256}
                  height={256}
                  decoding="async"
                  data-nimg={1}
                  className="h-16 w-16 scale-100 blur-0 grayscale-0 duration-700 ease-in-out"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <h2 className="font-manrope mb-1 text-center text-2xl font-extrabold tracking-tight">
              Межсезонье
            </h2>
            <div className="mb-2 max-w-md text-center leading-relaxed text-zinc-700 dark:text-zinc-200">
              Во время <b>межсезонья</b> карта недоступна а пока что вы можете
            </div>
            <a
              className="ring-black/15 dark:ring-white/15 dark:hover:bg-zinc-750 grid select-none grid-flow-col items-center justify-center gap-2.5 rounded-lg bg-zinc-100 px-5 py-2.5 font-medium text-zinc-900 outline-zinc-700 ring-1 ring-inset transition hover:bg-zinc-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:active:bg-zinc-600"
              aria-disabled="false"
              href="/me/settings/connections"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              Подключить Discord
            </a>
          </div>
        </div>

        {/* <figure className="mt-8 grid place-items-center rounded-xl bg-zinc-100/50 p-4 dark:bg-zinc-800/50 md:p-6">
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
       </figure> */}
      </main>
    </>
  );
}
