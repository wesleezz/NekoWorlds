import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { forwardRef } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Правила</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="NekoWorlds › Правила" />
        <meta property="og:description" content="Ванильный сервер" />
        <meta property="og:image" content="/og_image.png" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mb-12 mt-24">
        <Header></Header>

        <div className="container mx-auto px-6 pt-6">
          <div className="pt-18 grid gap-12 lg:grid-cols-[13rem_1fr_11rem] lg:grid-rows-none lg:gap-8 xl:grid-cols-[16rem_1fr_14rem]">
            <div className="hidden lg:block">
              <div className="lg:top-18 -ml-6 h-[calc(100vh-4.5rem)] overflow-y-auto px-6 py-8 [--scrollbar-size:theme(width.3)] lg:sticky">
                <div className="grid select-none">
                  <Link
                    className="relative -ml-3 grid grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium text-teal-500 transition hover:bg-zinc-100 dark:text-teal-400 dark:hover:bg-zinc-800"
                    href="/rules"
                    style={{ scrollMargin: "calc(50vh - 2.25rem)" }}
                  >
                    Правила сервера
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500/75" />
                  </Link>
                  <Link
                    className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    href="/rules/mods"
                  >
                    Разрещённые и запрещённые моды
                  </Link>
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
                                    href="#general"
                                  >
                                    Общие правила
                                  </Link>
                                  <Link
                                    className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                    href="#talk"
                                  >
                                    Правила общения
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
                                    className="relative -ml-3 grid grid grid-flow-col grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium text-teal-500 transition hover:bg-zinc-100 dark:text-teal-400 dark:hover:bg-zinc-800"
                                    aria-current="page"
                                    href="/rules"
                                    style={{
                                      scrollMargin: "calc(50vh - 2.25rem)",
                                    }}
                                  >
                                    Правила сервера
                                  </Link>
                                  <Link
                                    className="relative -ml-3 grid grid-flow-col items-start justify-start rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                    href="/rules/mods"
                                  >
                                    Разрещённые и запрещённые моды
                                  </Link>
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
                <div className="mb-6 grid w-full items-center justify-start gap-4 lg:grid-flow-col lg:justify-between">
                  <h1 className="font-manrope text-3xl font-bold tracking-tight">
                    Правила сервера
                  </h1>
                </div>
                <div className="prose prose-zinc dark:prose-invert prose-img:rounded-lg prose-headings:font-manrope prose-code:text-teal-600 dark:prose-code:text-teal-500 prose-pre:my-0 prose-pre:bg-transparent prose-pre:p-0 prose-pre:text-zinc-800 dark:prose-pre:text-zinc-200 prose-a:underline-offset-2 prose-a:transition prose-a:text-teal-600 prose-a:decoration-teal-300/50 hover:prose-a:text-teal-700 hover:prose-a:decoration-teal-400/50 dark:prose-a:text-teal-500 dark:prose-a:decoration-teal-700/50 dark:hover:prose-a:text-teal-300 dark:hover:prose-a:decoration-teal-500/50 max-w-full [&_li_p]:my-0">
                  <article>
                    <div
                      className="prose-p:my-0 prose-ul:my-0 grid gap-4 rounded-lg bg-zinc-300/25 p-5 ring-1 ring-inset ring-zinc-300/50 dark:bg-zinc-500/10 dark:ring-zinc-300/10"
                      role="region"
                    >
                      <div className="font-manrope grid grid-flow-col items-center justify-start gap-3 text-lg font-bold text-zinc-700 dark:text-zinc-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
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
                          <rect
                            x="5"
                            y="3"
                            width="14"
                            height="18"
                            rx="2"
                          ></rect>
                          <line x1="9" y1="7" x2="15" y2="7"></line>
                          <line x1="9" y1="11" x2="15" y2="11"></line>
                          <line x1="9" y1="15" x2="13" y2="15"></line>
                        </svg>
                        <div>Рекомендация</div>
                      </div>
                      <div className="grid gap-3">
                        <p>
                          Вы можете использовать поиск на странице в браузере
                          для поиска на странице
                        </p>
                        <ul className="mt-5 list-inside list-disc gap-2 rounded-lg px-6 marker:grid lg:list-outside">
                          <li className="mb-3">
                            На Windows:{" "}
                            <kbd className="inline whitespace-nowrap rounded-lg border border-zinc-400 px-1.5 py-0.5 text-sm shadow-sm dark:border-zinc-600 dark:bg-zinc-800">
                              Ctrl
                            </kbd>{" "}
                            +{" "}
                            <kbd className="inline whitespace-nowrap rounded-lg border border-zinc-400 px-1.5 py-0.5 text-sm shadow-sm dark:border-zinc-600 dark:bg-zinc-800">
                              F
                            </kbd>
                          </li>
                          <li className="mb-3">
                            На мобильных устройствах: Меню браузера → Поиск
                          </li>
                          <li className="mb-3">
                            На macOS:{" "}
                            <kbd className="inline whitespace-nowrap rounded-lg border border-zinc-400 px-1.5 py-0.5 text-sm shadow-sm dark:border-zinc-600 dark:bg-zinc-800">
                              Cmd
                            </kbd>{" "}
                            +{" "}
                            <kbd className="inline whitespace-nowrap rounded-lg border border-zinc-400 px-1.5 py-0.5 text-sm shadow-sm dark:border-zinc-600 dark:bg-zinc-800">
                              F
                            </kbd>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <section className="mb-12 mt-12">
                      <h2
                        id="general"
                        className="not-prose font-manrope not-prose group group mb-5 mt-5 grid scroll-mt-40 scroll-mt-40 grid-cols-[auto_1fr] items-center justify-start gap-4 text-2xl tracking-tight lg:grid lg:scroll-mt-24 lg:scroll-mt-24 lg:grid-cols-[auto_1fr] lg:items-center lg:justify-start lg:gap-2"
                      >
                        <a
                          href="#general"
                          className="not-prose grid select-none place-items-center overflow-hidden rounded-lg bg-zinc-200/50 px-2 py-1.5 font-sans text-base font-semibold tabular-nums leading-none no-underline ring-1 ring-inset ring-zinc-300/50 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:ring-zinc-700/50 dark:hover:bg-zinc-600"
                        >
                          <div className="translate-x-0 transform-gpu transition [grid-area:1/1] group-hover:translate-x-6">
                            1
                          </div>
                          <div className="-mx-[0.1435rem] -translate-x-6 transform-gpu transition [grid-area:1/1] group-hover:translate-x-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-3.5 w-3.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                          </div>
                        </a>
                        Общие правила
                      </h2>
                      <div className="">
                        <ol>
                          <li
                            className="group grid scroll-mt-24 grid-cols-[auto_1fr] gap-2 target:-my-1 target:-mr-5 target:ml-[-2.625rem] target:rounded-lg target:bg-zinc-200/75 target:py-1 target:pl-4 target:pr-5 target:dark:bg-zinc-800"
                            id="1.1"
                          >
                            <div
                              className="not-prose relative w-9 tabular-nums tracking-tighter"
                              aria-hidden="true"
                            >
                              <div className="opacity-90 transition group-hover:opacity-0">
                                1.1.{" "}
                              </div>
                              <a
                                className="absolute left-0 top-1.5 -m-2 p-2 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0"
                                href="#1.1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="mb-2">
                              <div className="sr-only">1.1. </div>Можно играть
                              только с модами из{" "}
                              <Link
                                href="/rules/mods"
                                className="text-teal-400 underline decoration-zinc-800 target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:text-teal-400 dark:decoration-zinc-500 dark:target:bg-yellow-300/10"
                              >
                                этого
                              </Link>{" "}
                              списка либо вы можете спросить{" "}
                              <Link
                                href="/contacts"
                                className="text-teal-400 underline decoration-zinc-800 target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:text-teal-400 dark:decoration-zinc-500 dark:target:bg-yellow-300/10"
                              >
                                администрацию
                              </Link>
                              .
                            </div>
                          </li>
                          <li
                            className="group grid scroll-mt-24 grid-cols-[auto_1fr] gap-2 target:-my-1 target:-mr-5 target:ml-[-2.625rem] target:rounded-lg target:bg-zinc-200/75 target:py-1 target:pl-4 target:pr-5 target:dark:bg-zinc-800"
                            id="1.2"
                          >
                            <div
                              className="not-prose relative w-9 tabular-nums tracking-tighter"
                              aria-hidden="true"
                            >
                              <div className="opacity-90 transition group-hover:opacity-0">
                                1.2.{" "}
                              </div>
                              <a
                                className="absolute left-0 top-1.5 -m-2 p-2 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0"
                                href="#1.2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="mb-2">
                              <div className="sr-only">1.2. </div>Гриферить
                              нельзя от слова совсем представьте себя на месте
                              того кого вы загриферили не приятно ведь да?
                            </div>
                          </li>
                          <li
                            className="group grid scroll-mt-24 grid-cols-[auto_1fr] gap-2 target:-my-1 target:-mr-5 target:ml-[-2.625rem] target:rounded-lg target:bg-zinc-200/75 target:py-1 target:pl-4 target:pr-5 target:dark:bg-zinc-800"
                            id="1.3"
                          >
                            <div
                              className="not-prose relative w-9 tabular-nums tracking-tighter"
                              aria-hidden="true"
                            >
                              <div className="opacity-90 transition group-hover:opacity-0">
                                1.3.{" "}
                              </div>
                              <a
                                className="absolute left-0 top-1.5 -m-2 p-2 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0"
                                href="#1.3"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="mb-2">
                              <div className="sr-only">1.3. </div>
                              Ответственность за ваш аккаунт всегда будет за
                              вами и &quot;я отходил это был мой кот&quot; не
                              прокатит.
                            </div>
                          </li>
                          <li
                            className="group grid scroll-mt-24 grid-cols-[auto_1fr] gap-2 target:-my-1 target:-mr-5 target:ml-[-2.625rem] target:rounded-lg target:bg-zinc-200/75 target:py-1 target:pl-4 target:pr-5 target:dark:bg-zinc-800"
                            id="1.4"
                          >
                            <div
                              className="not-prose relative w-9 tabular-nums tracking-tighter"
                              aria-hidden="true"
                            >
                              <div className="opacity-90 transition group-hover:opacity-0">
                                1.4.{" "}
                              </div>
                              <a
                                className="absolute left-0 top-1.5 -m-2 p-2 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0"
                                href="#1.4"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="mb-2">
                              <div className="sr-only">1.4. </div>Будьте дружные
                              и не оскорбляйте людей за их религию, пол и другое
                              что не зависит от человека.
                            </div>
                          </li>
                          <li
                            className="group grid scroll-mt-24 grid-cols-[auto_1fr] gap-2 target:-my-1 target:-mr-5 target:ml-[-2.625rem] target:rounded-lg target:bg-zinc-200/75 target:py-1 target:pl-4 target:pr-5 target:dark:bg-zinc-800"
                            id="1.5"
                          >
                            <div
                              className="not-prose relative w-9 tabular-nums tracking-tighter"
                              aria-hidden="true"
                            >
                              <div className="opacity-90 transition group-hover:opacity-0">
                                1.5.{" "}
                              </div>
                              <a
                                className="absolute left-0 top-1.5 -m-2 p-2 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0"
                                href="#1.5"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="mb-2">
                              <div className="sr-only">1.5. </div>Запрещено PVP
                              без причины в людных местах таких как спавн либо
                              приватные зоны.
                            </div>
                          </li>
                          <li
                            className="group grid scroll-mt-24 grid-cols-[auto_1fr] gap-2 target:-my-1 target:-mr-5 target:ml-[-2.625rem] target:rounded-lg target:bg-zinc-200/75 target:py-1 target:pl-4 target:pr-5 target:dark:bg-zinc-800"
                            id="1.6"
                          >
                            <div
                              className="not-prose relative w-9 tabular-nums tracking-tighter"
                              aria-hidden="true"
                            >
                              <div className="opacity-90 transition group-hover:opacity-0">
                                1.6.{" "}
                              </div>
                              <a
                                className="absolute left-0 top-1.5 -m-2 p-2 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0"
                                href="#1.6"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div>
                              <div className="sr-only">1.6. </div>Запрещено
                              нарушение правил компаний таких как{" "}
                              <a
                                href="https://discord.com"
                                className="text-teal-400 underline decoration-zinc-800 target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:text-teal-400 dark:decoration-zinc-500 dark:target:bg-yellow-300/10"
                              >
                                Discord
                              </a>
                              ,{" "}
                              <a
                                href="https://telegram.org"
                                className="text-teal-400 underline decoration-zinc-800 target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:text-teal-400 dark:decoration-zinc-500 dark:target:bg-yellow-300/10"
                              >
                                Telegram
                              </a>
                              ,{" "}
                              <a
                                href="https://mojang.com"
                                className="text-teal-400 underline decoration-zinc-800 target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:text-teal-400 dark:decoration-zinc-500 dark:target:bg-yellow-300/10"
                              >
                                Mojang
                              </a>
                              .
                            </div>
                          </li>
                        </ol>
                      </div>
                    </section>
                    <section>
                      <h2
                        id="talk"
                        className="not-prose font-manrope not-prose group group mb-5 mt-5 grid scroll-mt-40 scroll-mt-40 grid-cols-[auto_1fr] items-center justify-start gap-4 text-2xl tracking-tight lg:grid lg:scroll-mt-24 lg:scroll-mt-24 lg:grid-cols-[auto_1fr] lg:items-center lg:justify-start lg:gap-2"
                      >
                        <a
                          href="#talk"
                          className="not-prose grid select-none place-items-center overflow-hidden rounded-lg bg-zinc-200/50 px-2 py-1.5 font-sans text-base font-semibold tabular-nums leading-none no-underline ring-1 ring-inset ring-zinc-300/50 transition hover:bg-zinc-300 dark:bg-zinc-800 dark:ring-zinc-700/50 dark:hover:bg-zinc-600"
                        >
                          <div className="translate-x-0 transform-gpu transition [grid-area:1/1] group-hover:translate-x-6">
                            2
                          </div>
                          <div className="-mx-[0.1435rem] -translate-x-6 transform-gpu transition [grid-area:1/1] group-hover:translate-x-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-3.5 w-3.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                          </div>
                        </a>
                        Правила общения
                      </h2>
                      <div className="">
                        <ol>
                          <li
                            className="group grid scroll-mt-24 grid-cols-[auto_1fr] gap-2 target:-my-1 target:-mr-5 target:ml-[-2.625rem] target:rounded-lg target:bg-zinc-200/75 target:py-1 target:pl-4 target:pr-5 target:dark:bg-zinc-800"
                            id="2.1"
                          >
                            <div
                              className="not-prose relative w-9 tabular-nums tracking-tighter"
                              aria-hidden="true"
                            >
                              <div className="opacity-90 transition group-hover:opacity-0">
                                2.1.{" "}
                              </div>
                              <a
                                className="absolute left-0 top-1.5 -m-2 p-2 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0"
                                href="#2.1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="mb-2">
                              <div className="sr-only">2.1. </div>Нельзя
                              спамить, флудить, оффтопить и другими способами
                              засорять чат это ведь никому не нравиться.
                            </div>
                          </li>
                          <li
                            className="group grid scroll-mt-24 grid-cols-[auto_1fr] gap-2 target:-my-1 target:-mr-5 target:ml-[-2.625rem] target:rounded-lg target:bg-zinc-200/75 target:py-1 target:pl-4 target:pr-5 target:dark:bg-zinc-800"
                            id="2.2"
                          >
                            <div
                              className="not-prose relative w-9 tabular-nums tracking-tighter"
                              aria-hidden="true"
                            >
                              <div className="opacity-90 transition group-hover:opacity-0">
                                2.2.{" "}
                              </div>
                              <a
                                className="absolute left-0 top-1.5 -m-2 p-2 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0"
                                href="#2.2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="mb-2">
                              <div className="sr-only">2.2. </div>Не выдавайте
                              себя за другую личность к примеру админ,
                              модератор, влиятельный игрок или популярная
                              личность.
                            </div>
                          </li>
                          <li
                            className="group grid scroll-mt-24 grid-cols-[auto_1fr] gap-2 target:-my-1 target:-mr-5 target:ml-[-2.625rem] target:rounded-lg target:bg-zinc-200/75 target:py-1 target:pl-4 target:pr-5 target:dark:bg-zinc-800"
                            id="2.3"
                          >
                            <div
                              className="not-prose relative w-9 tabular-nums tracking-tighter"
                              aria-hidden="true"
                            >
                              <div className="opacity-90 transition group-hover:opacity-0">
                                2.3.{" "}
                              </div>
                              <a
                                className="absolute left-0 top-1.5 -m-2 p-2 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0"
                                href="#2.3"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-4 w-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="mb-2">
                              <div className="sr-only">2.3. </div>Не
                              провоцируйте человека на что нибудь например на
                              гриферство, отправление ложных жалоб, оскорбление
                              и другое.
                            </div>
                          </li>
                        </ol>
                      </div>
                    </section>
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
                          href="#general"
                        >
                          <div className="col-start-2">1. Общие правила </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="-ml-3 ml-7 grid cursor-pointer items-center justify-start rounded-lg px-3 py-2 text-left text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                          href="#talk"
                        >
                          <div className="col-start-2">2. Правила общения </div>
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
