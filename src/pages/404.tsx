import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Cтраница не найдена</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mt-24 mb-12">
        <Header></Header>

        <div className="grid h-full items-center justify-center">
          <div className="grid place-items-center gap-5 px-6">
            <div className="grid place-items-center">
              <div className="overflow-hidden rounded-lg mt-48">
                <Image
                  src="/magnifying_glass_tilted_left_3d.png"
                  alt="magnifying_glass_tilted_left_3d"
                  width="256"
                  height="256"
                  decoding="async"
                  data-nimg="1"
                  className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 h-16 w-16"
                  loading="lazy"
                />
                <h2 className="text-center font-manrope text-3xl font-extrabold tracking-tight">
                  404
                </h2>
              </div>
              <p>Хм.. мы искали везде но не нашли</p>
              <div className="grid gap-3 md:grid-flow-col">
                <Link
                  className="grid grid-flow-col items-center justify-center font-medium transition select-none px-5 py-2.5 gap-2.5 bg-zinc-100 dark:text-zinc-100 text-zinc-900 ring-1 ring-inset ring-black/15 dark:bg-zinc-700 dark:ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-600 active:bg-zinc-700 dark:hover:bg-zinc-750 dark:active:bg-zinc-600 rounded-full"
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
