import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter, Manrope } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NekoWorlds</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mt-24 mb-12">
        <Header></Header>

        <div className='relative grid grid-rows-1 items-center justify-center gap-6 overflow-hidden"><div class="grid h-full w-full grid-rows-1 place-items-center [grid-area:1/1] motion-safe:animate-homeCirclesContainer children:h-[400px] children:w-[400px] children:animate-homeCircle children:rounded-full children:blur-3xl children:[grid-area:1/1]"><div class="bg-teal-400/50 [--opacity-delay:-8s] [--position-delay:-3s]'>
          <div className='grid h-full w-full grid-rows-1 place-items-center [grid-area:1/1] motion-safe:animate-homeCirclesContainer children:h-[400px] children:w-[400px] children:animate-homeCircle children:rounded-full children:blur-3xl children:[grid-area:1/1]"><div class="bg-teal-400/50 [--opacity-delay:-8s] [--position-delay:-3s]'>
            <div className="relative z-30 grid place-items-center px-8 pt-32 pb-24 [grid-area:1/1] motion-safe:animate-homeText lg:pt-56 lg:pb-32">
              <h1 className="mx-auto mb-6 max-w-5xl text-center font-manrope text-5xl font-extrabold leading-[1.1] tracking-tighter md:text-6xl">
                Ванильный сервер{" "}
                <span className="text-teal-600 dark:text-teal-400">
                  для всех
                </span>
              </h1>
              <p className="mb-8 max-w-xl text-center text-lg leading-relaxed">
                Сайт ещё не доделан
              </p>
              <div className="mb-8 grid items-start justify-center gap-4 sm:grid-flow-col md:gap-6">
                <Link
                  className="grid grid-flow-col items-center justify-center font-medium transition select-none px-6 py-3 gap-2.5 bg-teal-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-teal-700 hover:bg-teal-700 active:bg-teal-800 rounded-full bg-shine animate-shine [--shine-color:theme(colors.teal.500/50%)]"
                  aria-disabled="false"
                  href="/wiki"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"></path>
                    <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path>
                    <path d="M8 9v2"></path>
                    <path d="M7 10h2"></path>
                    <path d="M14 10h2"></path>
                  </svg>
                  Подробнее
                </Link>
                <button
                  className="grid grid-flow-col items-center justify-center font-medium transition select-none px-6 py-3 gap-2.5 bg-zinc-100 dark:text-zinc-100 text-zinc-900 ring-1 ring-inset ring-black/15 dark:bg-zinc-700 dark:ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-750 dark:active:bg-zinc-600 rounded-full"
                  aria-disabled="false"
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Скопировать IP
                </button>
              </div>
              <div className="grid grid-flow-col items-center gap-2 text-sm">
                1.19.2
                <span className="opacity-75 hidden sm:inline">·</span>
                <span className="hidden sm:inline">
                  Minecraft: Java Edition
                </span>
                <span className="opacity-75 hidden sm:inline">·</span>
                <span className="hidden sm:inline">Без лицензии</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="container px-6 mx-auto my-12 grid gap-12">
            <div className="rounded-xl bg-blue-100/30 py-12 px-6 dark:bg-blue-900/10">
              <div className="mb-3 grid place-items-center">
                <Image
                  src="/open_book_3d.png"
                  alt="open_book_3d"
                  width="256"
                  height="256"
                  decoding="async"
                  data-nimg="1"
                  className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 h-16 w-16"
                  loading="lazy"
                />
              </div>
              <h2 className="mb-6 text-center font-manrope text-3xl font-extrabold tracking-tight text-blue-500">
                Новости
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-center leading-relaxed">
                Новости это главный источник информации на сервере, там много
                чего интересного и полезного и также в новостях вы можете узнать
                об новом ивенте
              </p>
            </div>
            <div className="rounded-xl bg-green-100/30 py-12 px-6 dark:bg-green-900/10">
              <div className="mb-3 grid place-items-center">
                <Image
                  src="/world_map_3d.png"
                  alt="world_map_3d"
                  width="256"
                  height="256"
                  decoding="async"
                  data-nimg="1"
                  className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 h-16 w-16"
                  loading="lazy"
                />
                <h2 className="mb-6 text-center font-manrope text-3xl font-extrabold tracking-tight text-green-500">
                  Мир
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-center leading-relaxed">
                  На нашем сервере очень большой октрытый мир и также есть
                  веб-карта с помощью которой вы можете посмотреть что
                  изменилось на сервере даже не заходя на него!
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-red-100/30 py-12 px-6 dark:bg-red-900/10">
              <div className="mb-3 grid place-items-center">
                <Image
                  src="/heart_on_fire_3d.png"
                  alt="heart_on_fire_3d"
                  width="256"
                  height="256"
                  decoding="async"
                  data-nimg="1"
                  className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 h-16 w-16"
                  loading="lazy"
                />
                <h2 className="mb-6 text-center font-manrope text-3xl font-extrabold tracking-tight text-red-500">
                  Комьюнити
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-center leading-relaxed">
                  Наши игроки помогают друг другу, делают видео, веселятся они
                  делают всё возможное для развлечений
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
