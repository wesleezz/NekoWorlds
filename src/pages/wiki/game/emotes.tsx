import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Эмоции › Вики · NekoWorlds</title>
        <meta name="description" content="Ванильный сервер для каждого пространство где уютно и лампово" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-title" content="NekoWorlds" />
        <meta property="og:site_name" content="NekoWorlds" />
        <meta property="og:title" content="Эмоции › Вики" />
        <meta property="og:description" content="Ванильный сервер для каждого пространство где уютно и лампово" />
        <meta property="og:image" content="/og_image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og_image.png" />
      </Head>
      <main className="mb-12 mt-24">
        <Header></Header>

        <div className="container mx-auto px-6 pt-6">
          <div className="pt-18 grid gap-12 lg:grid-cols-[13rem_1fr_11rem] lg:grid-rows-none lg:gap-8 xl:grid-cols-[16rem_1fr_14rem]">
            <div className="hidden lg:block">
              <div className="lg:top-18 -ml-6 h-[calc(100vh-4.5rem)] overflow-y-auto px-6 py-8 [--scrollbar-size:theme(width.3)] lg:sticky">
                <div className="grid select-none">
                  <Link
                    className="relative -ml-3 grid grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    href="/wiki"
                  >
                    Введение
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500/75" />
                  </Link>
                  <Link
                    className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    href="/wiki/faq"
                  >
                    Часто задаваемые вопросы
                  </Link>
                  <div className="mb-3 mt-4 grid">
                    <div className="font-manrope mb-3 font-bold">
                      Игровой контент
                    </div>
                    <div className="ml-4">
                      <div className="grid select-none">
                        <Link
                          className="relative -ml-3 grid grid grid-flow-col grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/resource-packs"
                        >
                          Ресурспак
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500/75" />
                        </Link>
                        <Link
                          className="relative -ml-3 grid grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium text-teal-500 transition hover:bg-zinc-100 dark:text-teal-400 dark:hover:bg-zinc-800"
                          href="/wiki/game/emotes"
                          style={{ scrollMargin: "calc(50vh - 2.25rem)" }}
                        >
                          Эмоции
                        </Link>
                        <Link
                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/frames"
                        >
                          Невидимые рамки
                        </Link>
                        <Link
                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/heads"
                        >
                          Головы
                        </Link>
                        <Link
                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/social-credits"
                        >
                          Социальный рейтинг
                        </Link>
                        <Link
                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="/wiki/game/stands"
                        >
                          Кастомизация стендов
                        </Link>
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
                              <Link
                                className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                href="/wiki/profile/integrations/discord"
                              >
                                Discord
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mx-auto">
              <div>
                <Menu>
                  <div className="mt-8 grid lg:hidden">
                    <Menu.Button className="ring-black/15 dark:ring-white/15 dark:hover:bg-zinc-750 mb-9 grid select-none grid-flow-col items-center justify-center gap-3 rounded-lg bg-zinc-100 px-7 py-4 font-medium text-zinc-900 outline-zinc-700 ring-1 ring-inset transition hover:bg-zinc-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:active:bg-zinc-600">
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
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items>
                      <div
                        className="fixed absolute relative inset-0 top-0 z-10 hidden h-screen bg-zinc-400/50 opacity-100 dark:bg-zinc-800/75"
                        id="headlessui-popover-overlay-:r1:"
                        aria-hidden="true"
                        data-headlessui-state="open"
                      />
                      <div
                        className="absolute inset-x-0 top-full z-40 mx-6 mt-4 grid origin-top scale-100 gap-3 opacity-100"
                        tabIndex={-1}
                        data-headlessui-state="open"
                        id="headlessui-popover-panel-:r2:"
                      >
                        <div className="grid rounded-2xl bg-white p-3 font-medium shadow-lg shadow-xl ring-1 ring-inset ring-zinc-100 dark:bg-zinc-800 dark:ring-zinc-700/75">
                          <Menu.Item>
                            {({ active }) => (
                              <div className="lg:top-18 -ml-6 h-[calc(100vh-4.5rem)] overflow-y-auto px-6 py-8 [--scrollbar-size:theme(width.3)] lg:sticky">
                                <div className="grid select-none">
                                  <div className="font-manrope mb-3 grid grid-cols-[auto_1fr] items-center justify-start gap-3 font-bold">
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
                                      <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      ></path>
                                      <line x1="4" y1="6" x2="20" y2="6"></line>
                                      <line
                                        x1="4"
                                        y1="12"
                                        x2="14"
                                        y2="12"
                                      ></line>
                                      <line
                                        x1="4"
                                        y1="18"
                                        x2="18"
                                        y2="18"
                                      ></line>
                                    </svg>
                                    На этой странице
                                  </div>
                                  <Link
                                    className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                    href="#how-to"
                                  >
                                    Как использовать?
                                  </Link>
                                  <div className="font-manrope mb-3 grid grid-cols-[auto_1fr] items-center justify-start gap-3 font-bold">
                                    <svg
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      fill="none"
                                      className="h-5 w-5"
                                    >
                                      <path d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"></path>
                                    </svg>
                                    Другие страницы
                                  </div>
                                  <Link
                                    className="relative -ml-3 grid grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                    href="/wiki"
                                  >
                                    Введение
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500/75" />
                                  </Link>
                                  <Link
                                    className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                    href="/wiki/faq"
                                  >
                                    Часто задаваемые вопросы
                                  </Link>
                                  <div className="mb-3 mt-4 grid">
                                    <div className="font-manrope mb-3 font-extrabold">
                                      Игровой контент
                                    </div>
                                    <div className="ml-4">
                                      <div className="grid select-none">
                                        <Link
                                          className="relative -ml-3 grid grid grid-flow-col grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                          href="/wiki/game/badges"
                                        >
                                          Ресурспак
                                          <div className="h-1.5 w-1.5 rounded-full bg-green-500/75" />
                                        </Link>
                                        <Link
                                          className="relative -ml-3 grid grid grid-flow-col grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium text-teal-500 transition hover:bg-zinc-100 dark:text-teal-400 dark:hover:bg-zinc-800"
                                          aria-current="page"
                                          href="/wiki/game/emotes"
                                          style={{
                                            scrollMargin:
                                              "calc(50vh - 2.25rem)",
                                          }}
                                        >
                                          Эмоции
                                        </Link>
                                        <Link
                                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                          href="/wiki/game/frames"
                                        >
                                          Невидимые рамки
                                        </Link>
                                        <Link
                                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                          href="/wiki/game/heads"
                                        >
                                          Головы
                                        </Link>
                                        <Link
                                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                          href="/wiki/game/social-credits"
                                        >
                                          Социальный рейтинг
                                        </Link>
                                        <Link
                                          className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                          href="/wiki/game/stands"
                                        >
                                          Кастомизация стендов
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-3 mt-4 grid">
                                    <div className="font-manrope mb-3 font-bold">
                                      Профиль
                                    </div>
                                    <div className="ml-4">
                                      <div className="grid select-none">
                                        <div className="mb-1 mt-1 grid">
                                          <div className="font-manrope mb-2 text-sm font-bold text-zinc-700 dark:text-zinc-200">
                                            Интеграции
                                          </div>
                                          <div className="ml-4">
                                            <div className="grid select-none">
                                              <Link
                                                className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                                href="/wiki/profile/integrations/discord"
                                              >
                                                Discord
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="grid items-start pb-12 lg:mt-8 lg:w-[32rem] xl:w-[40rem] 2xl:w-[48rem]">
                <div className="font-manrope mb-4 grid grid-flow-col items-center justify-start gap-1.5 text-sm font-semibold">
                  <span className="text-teal-500 dark:text-teal-400">
                    Игровой контент
                  </span>
                </div>
                <div className="mb-6 grid w-full items-center justify-start gap-4 lg:grid-flow-col lg:justify-between">
                  <h1 className="font-manrope text-3xl font-bold tracking-tight">
                    Эмоции
                  </h1>
                  <div className="grid justify-start text-sm font-semibold"></div>
                </div>
                <div className="prose prose-zinc dark:prose-invert prose-img:rounded-lg prose-headings:font-manrope prose-code:text-teal-600 dark:prose-code:text-teal-500 prose-pre:my-0 prose-pre:bg-transparent prose-pre:p-0 prose-pre:text-zinc-800 dark:prose-pre:text-zinc-200 prose-a:underline-offset-2 prose-a:transition prose-a:text-teal-600 prose-a:decoration-teal-300/50 hover:prose-a:text-teal-700 hover:prose-a:decoration-teal-400/50 dark:prose-a:text-teal-500 dark:prose-a:decoration-teal-700/50 dark:hover:prose-a:text-teal-300 dark:hover:prose-a:decoration-teal-500/50 max-w-full [&_li_p]:my-0">
                  <article>
                    <p className="text-zinc-700 dark:text-zinc-200">
                      Это ведь круто можно танцевать
                    </p>
                    <h3
                      id="how-to"
                      className="font-inter not-prose group mb-5 mt-5 scroll-mt-40 text-2xl tracking-tight lg:-ml-6 lg:grid lg:scroll-mt-24 lg:grid-cols-[auto_1fr] lg:items-center lg:justify-start lg:gap-2"
                    >
                      <a
                        className="-m-1.5 hidden p-1.5 text-zinc-800 opacity-0 transition hover:text-teal-600 focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0 dark:text-zinc-200 dark:hover:text-teal-500 lg:block"
                        href="#how-to"
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
                      Как использовать?
                      <a
                        className="-mb-0.5 inline-block opacity-0 transition group-hover:opacity-100 lg:hidden"
                        href="#how-to"
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
                    <ul className="mb-5 mt-5 gap-2 px-0">
                      <li className="text-zinc-700 dark:text-zinc-200">
                        Для этого вам пригодиться мод под названием
                        <a
                          href="https://modrinth.com/mod/emotecraft"
                          className="ml-1 text-teal-400 underline decoration-zinc-300 target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:text-teal-400 dark:decoration-zinc-500 dark:target:bg-yellow-300/10"
                        >
                          Emotecraft
                        </a>
                      </li>
                    </ul>
                    <h3
                      id="where-find"
                      className="font-inter not-prose group mb-5 mt-5 scroll-mt-40 text-2xl tracking-tight lg:-ml-6 lg:grid lg:scroll-mt-24 lg:grid-cols-[auto_1fr] lg:items-center lg:justify-start lg:gap-2"
                    >
                      <a
                        className="-m-1.5 hidden p-1.5 text-zinc-800 opacity-0 transition hover:text-teal-600 focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0 dark:text-zinc-200 dark:hover:text-teal-500 lg:block"
                        href="#where-find"
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
                      Пак-эмоций
                      <a
                        className="-mb-0.5 inline-block opacity-0 transition group-hover:opacity-100 lg:hidden"
                        href="#how-to"
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
                      <li className="mb-3 text-zinc-700 dark:text-zinc-200">
                        Версия эмотпака: 1.1
                      </li>
                      <li className="text-zinc-700 dark:text-zinc-200">
                        Последнее обновление: 29 апреля 2023
                      </li>
                    </ul>
                    <div className="not-prose grid grid-flow-col justify-start">
                      <a
                        className="ring-black/15 dark:ring-white/15 dark:hover:bg-zinc-250 grid select-none grid-flow-col items-center justify-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 font-medium text-zinc-900 outline-zinc-700 ring-1 ring-inset transition hover:bg-zinc-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:active:bg-zinc-600"
                        aria-disabled="false"
                        href="https://drive.google.com/file/d/1ikZnaJvmueE2S42GF2hNJ5wT4nzk3Tp8/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>Загрузить эмотпак</p>
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="grid">
                      <figure className="mt-8 grid place-items-center rounded-xl bg-zinc-100/50 p-4 dark:bg-zinc-800/50 md:p-6">
                        <div className="grid">
                          <Image
                            src="/emotes_2.gif"
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
              </div>
              <div className="prose prose-zinc dark:prose-invert prose-img:rounded-lg prose-headings:font-manrope prose-code:text-teal-600 dark:prose-code:text-teal-500 prose-pre:my-0 prose-pre:bg-transparent prose-pre:p-0 prose-pre:text-zinc-800 dark:prose-pre:text-zinc-200 prose-a:underline-offset-2 prose-a:transition prose-a:text-teal-600 prose-a:decoration-teal-300/50 hover:prose-a:text-teal-700 hover:prose-a:decoration-teal-400/50 dark:prose-a:text-teal-500 dark:prose-a:decoration-teal-700/50 dark:hover:prose-a:text-teal-300 dark:hover:prose-a:decoration-teal-500/50 max-w-full [&_li_p]:my-0"></div>
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
                          href="#how-to"
                        >
                          <div className="col-start-2">Как использовать? </div>
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
