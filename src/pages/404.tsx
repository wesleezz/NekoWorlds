import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Cтраница не найдена</title>
        <meta
          name="description"
          content="Ванильный сервер для каждого пространство где уютно и лампово"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-title" content="NekoWorlds" />
        <meta property="og:site_name" content="NekoWorlds" />
        <meta property="og:title" content="Cтраница не найдена" />
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

        <div className="grid h-full items-center justify-center">
          <div className="grid place-items-center gap-5 px-6">
            <div className="grid place-items-center">
              <div className="mb-5 mt-48 overflow-hidden rounded-lg">
                <Image
                  src="/emojis/magnifying_glass_tilted_left_3d.png"
                  alt="magnifying_glass_tilted_left_3d"
                  width="256"
                  height="256"
                  decoding="async"
                  data-nimg="1"
                  className="h-16 w-16 scale-100 blur-0 grayscale-0 duration-700 ease-in-out"
                  loading="lazy"
                />
                <h2 className="font-manrope text-center text-3xl font-extrabold tracking-tight">
                  404
                </h2>
              </div>
              <p>Хм.. мы искали везде но не нашли</p>
              <div className="mt-5 grid gap-3 md:grid-flow-col">
                <Link
                  className="ring-black/15 dark:ring-white/15 cz-color-16119028 cz-color-4603711 cz-color-15460325 grid select-none grid-flow-col items-center justify-center gap-2.5 rounded-full bg-zinc-100 px-6 py-3 font-medium text-zinc-900 outline-zinc-700 ring-1 ring-inset transition hover:bg-zinc-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 dark:active:bg-zinc-500"
                  aria-disabled="false"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  Главная
                </Link>
                <Link
                  className="ring-black/15 dark:ring-white/15 dark:hover:bg-zinc-750 grid select-none grid-flow-col items-center justify-center gap-2.5 rounded-full bg-zinc-100 px-5 py-2.5 font-medium text-zinc-900 outline-zinc-700 ring-1 ring-inset transition hover:bg-zinc-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:active:bg-zinc-600"
                  aria-disabled="false"
                  href="/me"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                  Личный кабинет
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
