import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Вики · Введение</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mb-12 mt-24">
        <Header></Header>

        <div className="container mx-auto px-6 pt-6">
          <div className="left-safe-left right-safe-right bottom-safe-bottom pointer-events-none fixed z-10 grid place-items-end p-6 lg:hidden">
            <button
              aria-label="Навигация"
              title="Навигация"
              className="ring-black/15 dark:ring-white/15 pointer-events-auto rounded-full bg-zinc-100 p-3 text-zinc-900 shadow-md ring-1 ring-inset transition hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:active:bg-zinc-600"
            >
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
                <line x1={4} y1={6} x2={20} y2={6} />
                <line x1={10} y1={12} x2={20} y2={12} />
                <line x1={6} y1={18} x2={20} y2={18} />
              </svg>
            </button>
          </div>
          <div className="pt-18 grid gap-12 lg:grid-cols-[13rem_1fr_11rem] lg:grid-rows-none lg:gap-8 xl:grid-cols-[16rem_1fr_14rem]">
            <div className="hidden lg:block">
              <div className="lg:top-18 -ml-6 h-[calc(100vh-4.5rem)] overflow-y-auto px-6 py-8 [--scrollbar-size:theme(width.3)] lg:sticky">
                <div className="grid select-none">
                  <a
                    className="relative -ml-3 grid grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium text-teal-500 transition hover:bg-zinc-100 dark:text-teal-400 dark:hover:bg-zinc-800"
                    href="/wiki"
                    style={{ scrollMargin: "calc(50vh - 2.25rem)" }}
                  >
                    Введение
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500/75" />
                  </a>
                  <a
                    className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    href="/wiki/faq"
                  >
                    Часто задаваемые вопросы
                  </a>
                  <div className="mb-3 mt-4 grid">
                    <div className="font-manrope mb-3 font-bold">
                      Игровой контент
                    </div>
                    <div className="ml-4">
                      <div className="grid select-none">
                        <a
                          className="relative -ml-3 grid grid grid-flow-col grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/badges"
                        >
                          Ресурспак
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500/75" />
                        </a>
                        <a
                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/emotes"
                        >
                          Мешки
                        </a>
                        <a
                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/frames"
                        >
                          Невидимые рамки
                        </a>
                        <a
                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/heads"
                        >
                          Головы
                        </a>
                        <a
                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/social-credits"
                        >
                          Социальный рейтинг
                        </a>
                        <a
                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/stands"
                        >
                          Кастомизация стендов
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 mt-4 grid">
                    <div className="font-manrope mb-3 font-bold">Профиль</div>
                    <div className="ml-4">
                      <div className="grid select-none">
                        <div className="mb-1 mt-1 grid">
                          <div className="font-manrope mb-2 text-sm font-bold text-zinc-700 dark:text-zinc-200">
                            Интеграции
                          </div>
                          <div className="ml-4">
                            <div className="grid select-none">
                              <a
                                className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                href="/wiki/profile/integrations/discord"
                              >
                                Discord
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid lg:hidden">
              <button
                className="ring-black/15 dark:ring-white/15 dark:hover:bg-zinc-750 grid select-none grid-flow-col items-center justify-center gap-3 rounded-lg bg-zinc-100 px-7 py-4 font-medium text-zinc-900 outline-zinc-700 ring-1 ring-inset transition hover:bg-zinc-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:active:bg-zinc-600"
                aria-disabled="false"
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
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={14} y2={12} />
                  <line x1={4} y1={18} x2={18} y2={18} />
                </svg>
                Навигация
              </button>
            </div>
            <div className="lg:mx-auto">
              <div className="grid items-start pb-12 lg:mt-8 lg:w-[32rem] xl:w-[40rem] 2xl:w-[48rem]">
                <div className="mb-6 grid w-full items-center justify-start gap-4 lg:grid-flow-col lg:justify-between">
                  <h1 className="font-manrope text-3xl font-bold tracking-tight">
                    Введение
                  </h1>
                  <div className="grid justify-start text-sm font-semibold">
                    <div className="-my-1 rounded-full bg-green-100/50 px-3 py-1 text-green-800 ring-1 ring-inset ring-green-300/50 dark:bg-green-700/20 dark:text-green-500 dark:ring-green-700/20">
                      Вики в разработке
                    </div>
                  </div>
                </div>
                <div className="prose prose-zinc dark:prose-invert prose-img:rounded-lg prose-headings:font-manrope prose-code:text-teal-600 dark:prose-code:text-teal-500 prose-pre:my-0 prose-pre:bg-transparent prose-pre:p-0 prose-pre:text-zinc-800 dark:prose-pre:text-zinc-200 prose-a:underline-offset-2 prose-a:transition prose-a:text-teal-600 prose-a:decoration-teal-300/50 hover:prose-a:text-teal-700 hover:prose-a:decoration-teal-400/50 dark:prose-a:text-teal-500 dark:prose-a:decoration-teal-700/50 dark:hover:prose-a:text-teal-300 dark:hover:prose-a:decoration-teal-500/50 max-w-full [&_li_p]:my-0">
                  <article>
                    <p>
                      Приветствуем вас это вики сервера NekoWorlds. Тут можно
                      найти и гайды и ответы на вопросы.
                    </p>
                    <h3
                      id="first-time"
                      className="font-inter not-prose group mb-5 mt-5 scroll-mt-40 text-2xl tracking-tight lg:-ml-6 lg:grid lg:scroll-mt-24 lg:grid-cols-[auto_1fr] lg:items-center lg:justify-start lg:gap-2"
                    >
                      <a
                        className="-m-1.5 hidden p-1.5 text-zinc-800 opacity-0 transition hover:text-teal-600 focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0 dark:text-zinc-200 dark:hover:text-teal-500 lg:block"
                        href="#first-time"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          ></path>
                        </svg>
                      </a>
                      Впервые на сервере?
                      <a
                        className="-mb-0.5 inline-block opacity-0 transition group-hover:opacity-100 lg:hidden"
                        href="#first-time"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          ></path>
                        </svg>
                      </a>
                    </h3>
                    <ul className="mb-5 mt-5 list-inside list-disc gap-2 rounded-lg px-6 marker:grid lg:list-outside">
                      <li className=" text-teal-400 target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:text-teal-400 dark:target:bg-yellow-300/10">
                        <Link href="/rules">Правила сервера</Link>
                      </li>
                    </ul>
                    <div className="relative grid">
                      <figure className="mt-8 grid place-items-center rounded-xl bg-zinc-100/50 p-4 dark:bg-zinc-800/50 md:p-6">
                        <div className="relative grid">
                          <Image
                            src="/screenshot_1.png"
                            alt="screenshot"
                            width="1920"
                            height="1080"
                            draggable="true"
                            data-nimg="1"
                            className="opacity-1 my-0 h-auto max-h-96 w-auto max-w-full rounded-lg transition duration-500 [grid-area:1/1]"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <figure className="mt-8 grid place-items-center rounded-xl bg-zinc-100/50 p-4 dark:bg-zinc-800/50 md:p-6">
                        <div className="relative grid">
                          <Image
                            src="/screenshot_2.png"
                            alt="screenshot"
                            width="1920"
                            height="1080"
                            draggable="true"
                            data-nimg="1"
                            className="opacity-1 my-0 h-auto max-h-96 w-auto max-w-full rounded-lg transition duration-500 [grid-area:1/1]"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                      <figure className="mt-8 grid place-items-center rounded-xl bg-zinc-100/50 p-4 dark:bg-zinc-800/50 md:p-6">
                        <div className="relative grid">
                          <Image
                            src="/screenshot_3.png"
                            alt="screenshot"
                            width="1920"
                            height="1080"
                            draggable="true"
                            data-nimg="1"
                            className="opacity-1 my-0 h-auto max-h-96 w-auto max-w-full rounded-lg transition duration-500 [grid-area:1/1]"
                            loading="lazy"
                          />
                        </div>
                      </figure>
                    </div>
                  </article>
                </div>
                <div className="prose prose-zinc dark:prose-invert prose-img:rounded-lg prose-headings:font-manrope prose-code:text-teal-600 dark:prose-code:text-teal-500 prose-pre:my-0 prose-pre:bg-transparent prose-pre:p-0 prose-pre:text-zinc-800 dark:prose-pre:text-zinc-200 prose-a:underline-offset-2 prose-a:transition prose-a:text-teal-600 prose-a:decoration-teal-300/50 hover:prose-a:text-teal-700 hover:prose-a:decoration-teal-400/50 dark:prose-a:text-teal-500 dark:prose-a:decoration-teal-700/50 dark:hover:prose-a:text-teal-300 dark:hover:prose-a:decoration-teal-500/50 max-w-full [&_li_p]:my-0"></div>
              </div>
            </div>
            <div className="hidden py-8 lg:block">
              <div className="grid items-start gap-6 lg:sticky lg:top-28">
                <div className="grid gap-3 text-sm">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center justify-start gap-3 text-sm font-bold text-zinc-700 dark:text-zinc-200">
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
                      <line x1={4} y1={6} x2={20} y2={6} />
                      <line x1={4} y1={12} x2={14} y2={12} />
                      <line x1={4} y1={18} x2={18} y2={18} />
                    </svg>
                    На этой странице
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <a
                          className="-ml-3 ml-7 grid cursor-pointer items-center justify-start rounded-lg px-3 py-2 text-left text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="#first-time"
                        >
                          <div className="col-start-2">
                            Впервые на сервере?{" "}
                          </div>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
