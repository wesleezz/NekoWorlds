import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const handleCopy = () => {
  const text = "mc.nekocorp.gq";
  navigator.clipboard.writeText(text);
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная · NekoWorlds</title>
        <meta
          name="description"
          content="Ванильный сервер для каждого пространство где уютно и лампово"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-title" content="NekoWorlds" />
        <meta property="og:site_name" content="NekoWorlds" />
        <meta property="og:title" content="Главная" />
        <meta
          property="og:description"
          content="Ванильный сервер для каждого пространство где уютно и лампово"
        />
        <meta property="og:image" content="/og_image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og_image.png" />
      </Head>
      <main className="mb-12 mt-24">
        {/* Хеадер */}
        <Header></Header>

        <div className="relative grid grid-rows-1 items-center justify-center gap-6 overflow-hidden">
          <div className="motion-safe:animate-homeCirclesContainer children:h-[400px] children:w-[400px] children:animate-homeCircle children:rounded-full children:blur-3xl children:[grid-area:1/1] grid h-full w-full grid-rows-1 place-items-center [grid-area:1/1]">
            <div className="motion-safe:animate-homeText relative z-30 grid place-items-center px-8 pb-24 pt-32 [grid-area:1/1] lg:pb-32 lg:pt-56">
              {/* Заголовок */}
              <h1 className="font-manrope mx-auto mb-6 max-w-5xl text-center text-5xl font-extrabold leading-[1.1] tracking-tighter md:text-6xl">
                Ванильный сервер{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  для всех
                </span>
              </h1>
              {/* Описание */}
              <p className="mb-8 max-w-xl text-center text-lg leading-relaxed">
                Наш мир творчества и креативности созданный специально для ваших идей
              </p>

              {/* <h1 className="font-manrope mx-auto mb-6 max-w-5xl text-center text-indigo-600 text-5xl font-extrabold leading-[1.1] tracking-tighter md:text-6xl">
                Перезагрузка
                  </h1>
                  <h1 className="font-manrope mx-auto mb-6 max-w-5xl text-center text-5xl font-extrabold leading-[1.1] tracking-tighter md:text-6xl">
                Межсезонье
                  </h1> */}

              <div className="mb-8 grid items-start justify-center gap-4 sm:grid-flow-col md:gap-6">
                {/* Подробнее */}
                <Link
                  className="bg-shine animate-shine grid select-none grid-flow-col items-center justify-center gap-2.5 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white outline-indigo-700 transition [--shine-color:theme(colors.indigo.500/50%)] hover:bg-indigo-700 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-indigo-800"
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
                {/* Скопировать IP */}
                <button
                  className="ring-black/15 dark:ring-white/15 cz-color-16119028 cz-color-4603711 cz-color-15460325 grid select-none grid-flow-col items-center justify-center gap-2.5 rounded-full bg-zinc-100 px-6 py-3 font-medium text-zinc-900 outline-zinc-700 ring-1 ring-inset transition hover:bg-zinc-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 dark:active:bg-zinc-500"
                  aria-disabled="false"
                  id="copy-button"
                  onClick={handleCopy}
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
                1.20.1
                <span className="hidden opacity-75 sm:inline">·</span>
                <span className="hidden sm:inline">
                  Minecraft: Java Edition
                </span>
                <span className="opacity-75">·</span>
                <span className="">Без лицензии</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="container mx-auto my-12 grid gap-12 px-6">
            {/* Новости */}
            <div className="rounded-xl bg-blue-100/30 px-6 py-12 dark:bg-blue-900/10">
              <div className="mb-3 grid place-items-center">
                <Image
                  src="/open_book_3d.png"
                  alt="open_book_3d"
                  width="256"
                  height="256"
                  decoding="async"
                  data-nimg="1"
                  className="h-16 w-16 scale-100 blur-0 grayscale-0 duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
              <h2 className="font-manrope mb-6 text-center text-3xl font-extrabold tracking-tight text-blue-500">
                Новости
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-center leading-relaxed">
                Новости это главный источник информации на сервере, там много
                чего интересного и полезного и также в новостях вы можете узнать
                об новом ивенте
              </p>
            </div>
            {/* Мир */}
            <div className="rounded-xl bg-green-100/30 px-6 py-12 dark:bg-green-900/10">
              <div className="mb-3 grid place-items-center">
                <Image
                  src="/world_map_3d.png"
                  alt="world_map_3d"
                  width="256"
                  height="256"
                  decoding="async"
                  data-nimg="1"
                  className="h-16 w-16 scale-100 blur-0 grayscale-0 duration-700 ease-in-out"
                  loading="lazy"
                />
                <h2 className="font-manrope mb-6 text-center text-3xl font-extrabold tracking-tight text-green-500">
                  Мир
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-center leading-relaxed">
                  На нашем сервере очень большой октрытый мир и также есть
                  веб-карта с помощью которой вы можете посмотреть что
                  изменилось на сервере даже не заходя на него!
                </p>
              </div>
            </div>
            {/* Комьюнити */}
            <div className="rounded-xl bg-red-100/30 px-6 py-12 dark:bg-red-900/10">
              <div className="mb-3 grid place-items-center">
                <Image
                  src="/heart_on_fire_3d.png"
                  alt="heart_on_fire_3d"
                  width="256"
                  height="256"
                  decoding="async"
                  data-nimg="1"
                  className="h-16 w-16 scale-100 blur-0 grayscale-0 duration-700 ease-in-out"
                  loading="lazy"
                />
                <h2 className="font-manrope mb-6 text-center text-3xl font-extrabold tracking-tight text-red-500">
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
  {/* <div className="mx-auto max-w-2xl px-6 pb-12">
  <div
    className="grid p-5 gap-4 rounded-lg ring-1 ring-inset ring-zinc-300/50 dark:ring-zinc-300/10 bg-zinc-300/25 dark:bg-zinc-500/10"
    role="region"
  >
    <div className="grid grid-flow-col items-center justify-start font-manrope font-bold text-lg gap-3 text-zinc-700 dark:text-zinc-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1={3} y1={3} x2={21} y2={21} />
        <path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" />
        <path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" />
        <line x1={3} y1={11} x2={11} y2={11} />
        <line x1={15} y1={11} x2={21} y2={11} />
        <line x1={7} y1={15} x2="7.01" y2={15} />
        <line x1={11} y1={15} x2={13} y2={15} />
      </svg>
      <div>Покупка доступов на сервер приостановлена</div>
    </div>
    <div className="grid gap-3">
      <div className="prose prose-zinc dark:prose-invert">
        <p>
        </p>
        <p></p>
        <p>
        </p>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Link
          className="grid grid-flow-col items-center justify-center font-medium transition select-none px-5 py-2.5 gap-2.5 bg-zinc-100 dark:text-zinc-100 text-zinc-900 ring-1 ring-inset ring-black/15 dark:bg-zinc-700 dark:ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-750 dark:active:bg-zinc-600 rounded-lg"
          aria-disabled="false"
          href="/tg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M2.53419 10.491 20.4342 3.72755c.5979-.22564 1.2652.07521 1.4908.67307.0791.21021.0964.43779.0482.65668l-3.0857 14.0805c-.1562.7136-.8611 1.1658-1.5747 1.0086-.1774-.0385-.3442-.1138-.4918-.2198l-6.1453-4.4415c-.3694-.2671-.4533-.784-.1852-1.1543.0289-.0395.0617-.0771.0964-.1118l6.319-6.07213c.1311-.12632.135-.33557.0087-.46768-.109-.11282-.2826-.13404-.4156-.04918L7.88597 13.0975c-.5101.324-1.13978.3973-1.7116.1996l-3.618-1.2516c-.43103-.1485-.65957-.6201-.51107-1.0511.081-.2314.25939-.4166.48889-.5034Z" />
          </svg>
          Telegram канал
        </Link>
        <Link
          className="grid grid-flow-col items-center justify-center font-medium transition select-none px-5 py-2.5 gap-2.5 bg-zinc-100 dark:text-zinc-100 text-zinc-900 ring-1 ring-inset ring-black/15 dark:bg-zinc-700 dark:ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-750 dark:active:bg-zinc-600 rounded-lg"
          aria-disabled="false"
          href="/support"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x={4} y={13} rx={2} width={4} height={6} />
            <rect x={16} y={13} rx={2} width={4} height={6} />
            <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
            <path d="M18 19a6 3 0 0 1 -6 3" />
          </svg>
          Поддержка
        </Link>
      </div>
    </div>
  </div>
</div> */}

        {/* Футер */}
        <Footer></Footer>
      </main>
    </>
  );
}
