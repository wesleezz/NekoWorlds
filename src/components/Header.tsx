import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

async function handleDiscordSignin() {
  signIn("discord", { callbackUrl: "https://nekocorp.gq" });
}

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  if (session) {
    return (
      <main className="px-30 vh-100 -mt-16 flex flex-col items-center pb-6">
        <header className="h-18 supports-backdrop-blur:backdrop-blur supports-backdrop-blur:bg-white/75 supports-backdrop-blur:dark:bg-zinc-900/75 max-w-8xl fixed z-50 mx-4 mx-auto -mt-8 grid w-full select-none items-center border-b border-slate-900/10 border-zinc-100/50 bg-white py-4 backdrop-blur backdrop-saturate-150 transition dark:border-slate-300/10 dark:border-zinc-800/50 dark:bg-zinc-900/80 lg:mx-0 lg:border-0 lg:px-8">
          <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-6">
            <div className="lg:mx-auto lg:hidden">
              <div>
                <Menu>
                  <div className="lg:hidden">
                    <Menu.Button className="-ml-3 grid h-10 w-10 place-items-center rounded-full transition hover:bg-zinc-200/25 dark:hover:bg-zinc-600/20">
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
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                      </svg>
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
                      <div>
                        <div
                          className="fixed inset-0 z-40 hidden h-screen w-full w-screen bg-zinc-400/50 opacity-100 dark:bg-zinc-800/75"
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
                          <div className="flex grid items-center justify-start rounded-2xl bg-white p-3 font-medium shadow-lg shadow-xl ring-1 ring-inset ring-zinc-100 dark:bg-zinc-800 dark:ring-zinc-700/75">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center justify-start gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-200/25 hover:ring-1 hover:ring-inset hover:ring-black/10 hover:dark:bg-zinc-600/20 hover:dark:text-white hover:dark:ring-white/10"
                                  href="/"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                  </svg>
                                  Главная
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center justify-start gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-200/25 hover:ring-1 hover:ring-inset hover:ring-black/10 hover:dark:bg-zinc-600/20 hover:dark:text-white hover:dark:ring-white/10"
                                  href="/rules"
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    fill="none"
                                    className="h-6 w-6"
                                  >
                                    <path d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"></path>
                                  </svg>
                                  Правила
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center justify-start gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-200/25 hover:ring-1 hover:ring-inset hover:ring-black/10 hover:dark:bg-zinc-600/20 hover:dark:text-white hover:dark:ring-white/10"
                                  href="/wiki"
                                >
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
                                      y="4"
                                      width="4"
                                      height="16"
                                      rx="1"
                                    ></rect>
                                    <rect
                                      x="9"
                                      y="4"
                                      width="4"
                                      height="16"
                                      rx="1"
                                    ></rect>
                                    <path d="M5 8h4"></path>
                                    <path d="M9 16h4"></path>
                                    <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path>
                                    <path d="M14 9l4 -1"></path>
                                    <path d="M16 16l3.923 -.98"></path>
                                  </svg>
                                  Вики
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center justify-start gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-200/25 hover:ring-1 hover:ring-inset hover:ring-black/10 hover:dark:bg-zinc-600/20 hover:dark:text-white hover:dark:ring-white/10"
                                  href="/map"
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
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    ></path>
                                    <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"></path>
                                    <line x1="8" y1="7" x2="8" y2="7.01"></line>
                                    <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"></path>
                                    <line
                                      x1="16"
                                      y1="15"
                                      x2="16"
                                      y2="15.01"
                                    ></line>
                                  </svg>
                                  Карта
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="grid items-center justify-start">
              <Link
                className="block transition hover:opacity-90 active:scale-90"
                href="/"
              >
                <svg
                  viewBox="0 0 480 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                >
                  <rect width="480" height="480" rx="130" fill="#134E4A"></rect>
                  <rect
                    width="480"
                    height="480"
                    rx="130"
                    fill="#000"
                    fill-opacity=".5"
                  ></rect>
                  <path
                    d="M350 0H130C58.203 0 0 58.203 0 130V350C0 421.797 58.203 480 130 480H350C421.797 480 480 421.797 480 350V130C480 58.203 421.797 0 350 0Z"
                    fill="#134E4A"
                  />
                  <path
                    d="M350 0H130C58.203 0 0 58.203 0 130V350C0 421.797 58.203 480 130 480H350C421.797 480 480 421.797 480 350V130C480 58.203 421.797 0 350 0Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M350 9H130C63.1735 9 9 63.1735 9 130V350C9 416.826 63.1735 471 130 471H350C416.826 471 471 416.826 471 350V130C471 63.1735 416.826 9 350 9Z"
                    fill="#0A2725"
                    stroke="#134E4A"
                    stroke-width="18"
                  />
                  <path
                    d="M350 9H130C63.1735 9 9 63.1735 9 130V350C9 416.826 63.1735 471 130 471H350C416.826 471 471 416.826 471 350V130C471 63.1735 416.826 9 350 9Z"
                    stroke="#134E4A"
                    stroke-width="18"
                  />
                  <path
                    d="M115.5 122.5V166H100V239H115.5V270H100V342.5H115.5V372.5H130.5V388H174.5V431H231V401H249.5V431H307V388H351V372.5H364.5V344.5H380V270H364.5V256V238.5H380V209.5H364.5V123H349.5V107.5H335.5V50H321V62.5H307.5V77.5H290.5V64.5H188.5V77.5H173V64.5H160V50H144V107.5H129.5V122.5H115.5Z"
                    fill="#CDDFDE"
                  />
                  <rect
                    x="9"
                    y="9"
                    width="462"
                    height="462"
                    rx="121"
                    stroke="#134E4A"
                    stroke-width="18"
                  ></rect>
                </svg>
              </Link>
            </div>
            <nav className="hidden grid-flow-col place-items-center gap-3.5 lg:grid lg:text-sm xl:text-base">
              <Link
                className="relative -my-2 grid rounded-full px-4 py-2 font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
                href="/"
                aria-current="page"
              >
                Главная
              </Link>
              <Link
                className="relative -my-2 grid rounded-full px-4 py-2 font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
                href="/rules"
              >
                Правила
              </Link>
              <Link
                className="relative -my-2 grid rounded-full px-4 py-2 font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
                href="/wiki"
              >
                Вики
              </Link>
              <Link
                className="relative -my-2 grid rounded-full px-4 py-2 font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
                href="/map"
              >
                Карта
              </Link>
            </nav>
            <div className="grid transform grid-flow-col items-center justify-end gap-1 opacity-100 md:gap-0">
              <div className="grid grid-flow-col items-center gap-1">
                <div className="relative" data-headlessui-state="">
                  <button
                    className="grid overflow-hidden rounded-full p-2 transition hover:bg-zinc-200/25 dark:hover:bg-zinc-600/20"
                    aria-label="Цветовая тема"
                    title="Цветовая тема"
                    id="headlessui-listbox-button-:r0:"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-headlessui-state=""
                    onClick={() =>
                      theme == "dark" ? setTheme("light") : setTheme("dark")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <Menu>
                    <Menu.Button
                      className="grid transition hover:opacity-90"
                      aria-label="Профиль игрока"
                      title="Профиль игрока"
                      id="headlessui-menu-button-:r0:"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="true"
                      data-headlessui-state="open"
                      aria-controls="headlessui-menu-items-:r2:"
                    >
                      <Image
                        draggable="false"
                        aria-label={session?.user.name}
                        alt={session?.user.name}
                        src={session?.user.image}
                        width={50}
                        height={50}
                        decoding="async"
                        data-nimg={1}
                        className="opacity-1 h-9 w-9 rounded-full transition duration-500 [grid-area:1/1]"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </Menu.Button>
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
                        <div>
                          <div
                            className="fixed inset-0 z-40 hidden h-screen w-full w-screen bg-zinc-400/50 opacity-100 dark:bg-zinc-800/75"
                            id="headlessui-popover-overlay-:r1:"
                            aria-hidden="true"
                            data-headlessui-state="open"
                          />
                          <div
                            className="z-126 absolute inset-x-0 top-full mx-6 mt-4 grid origin-top scale-90 gap-3 opacity-100"
                            tabIndex={-1}
                            data-headlessui-state="open"
                            id="headlessui-popover-panel-:r2:"
                          >
                            <div className="flex grid items-center justify-start rounded-2xl bg-white p-3 font-medium shadow-lg shadow-xl ring-1 ring-inset ring-zinc-100 dark:bg-zinc-800 dark:ring-zinc-700/75">
                              <Menu.Item>
                                {({ active }) => (
                                  <div className="font-manrope truncate text-lg font-semibold">
                                    {session?.user.name}
                                  </div>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center justify-start gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-200/25 hover:ring-1 hover:ring-inset hover:ring-black/10 hover:dark:bg-zinc-600/20 hover:dark:text-white hover:dark:ring-white/10"
                                    onClick={() => signOut()}
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
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                      />
                                    </svg>
                                    Выйти
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
    );
  }

  return (
    <main className="px-30 vh-100 -mt-16 flex flex-col items-center pb-6">
      <header className="h-18 supports-backdrop-blur:backdrop-blur supports-backdrop-blur:bg-white/75 supports-backdrop-blur:dark:bg-zinc-900/75 max-w-8xl fixed z-50 mx-4 mx-auto -mt-8 grid w-full select-none items-center border-b border-slate-900/10 border-zinc-100/50 bg-white py-4 backdrop-blur backdrop-saturate-150 transition dark:border-slate-300/10 dark:border-zinc-800/50 dark:bg-zinc-900/80 lg:mx-0 lg:border-0 lg:px-8">
        <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-6">
          <div className="lg:mx-auto lg:hidden">
            <div>
              <Menu>
                <div className="lg:hidden">
                  <Menu.Button className="-ml-3 grid h-10 w-10 place-items-center rounded-full transition hover:bg-zinc-200/25 dark:hover:bg-zinc-600/20">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="4" y1="6" x2="20" y2="6"></line>
                      <line x1="4" y1="12" x2="20" y2="12"></line>
                      <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
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
                    <div>
                      <div
                        className="fixed inset-0 z-40 hidden h-screen w-full w-screen bg-zinc-400/50 opacity-100 dark:bg-zinc-800/75"
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
                        <div className="flex grid items-center justify-start rounded-2xl bg-white p-3 font-medium shadow-lg shadow-xl ring-1 ring-inset ring-zinc-100 dark:bg-zinc-800 dark:ring-zinc-700/75">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center justify-start gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-200/25 hover:ring-1 hover:ring-inset hover:ring-black/10 hover:dark:bg-zinc-600/20 hover:dark:text-white hover:dark:ring-white/10"
                                href="/"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                  />
                                </svg>
                                Главная
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center justify-start gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-200/25 hover:ring-1 hover:ring-inset hover:ring-black/10 hover:dark:bg-zinc-600/20 hover:dark:text-white hover:dark:ring-white/10"
                                href="/rules"
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="none"
                                  className="h-6 w-6"
                                >
                                  <path d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"></path>
                                </svg>
                                Правила
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center justify-start gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-200/25 hover:ring-1 hover:ring-inset hover:ring-black/10 hover:dark:bg-zinc-600/20 hover:dark:text-white hover:dark:ring-white/10"
                                href="/wiki"
                              >
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
                                    y="4"
                                    width="4"
                                    height="16"
                                    rx="1"
                                  ></rect>
                                  <rect
                                    x="9"
                                    y="4"
                                    width="4"
                                    height="16"
                                    rx="1"
                                  ></rect>
                                  <path d="M5 8h4"></path>
                                  <path d="M9 16h4"></path>
                                  <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path>
                                  <path d="M14 9l4 -1"></path>
                                  <path d="M16 16l3.923 -.98"></path>
                                </svg>
                                Вики
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center justify-start gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-200/25 hover:ring-1 hover:ring-inset hover:ring-black/10 hover:dark:bg-zinc-600/20 hover:dark:text-white hover:dark:ring-white/10"
                                href="/map"
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
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"></path>
                                  <line x1="8" y1="7" x2="8" y2="7.01"></line>
                                  <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z"></path>
                                  <line
                                    x1="16"
                                    y1="15"
                                    x2="16"
                                    y2="15.01"
                                  ></line>
                                </svg>
                                Карта
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="grid items-center justify-start">
            <Link
              className="block transition hover:opacity-90 active:scale-90"
              href="/"
            >
              <svg
                viewBox="0 0 480 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
              >
                <rect width="480" height="480" rx="130" fill="#134E4A"></rect>
                <rect
                  width="480"
                  height="480"
                  rx="130"
                  fill="#000"
                  fill-opacity=".5"
                ></rect>
                <path
                  d="M350 0H130C58.203 0 0 58.203 0 130V350C0 421.797 58.203 480 130 480H350C421.797 480 480 421.797 480 350V130C480 58.203 421.797 0 350 0Z"
                  fill="#134E4A"
                />
                <path
                  d="M350 0H130C58.203 0 0 58.203 0 130V350C0 421.797 58.203 480 130 480H350C421.797 480 480 421.797 480 350V130C480 58.203 421.797 0 350 0Z"
                  fill="black"
                  fill-opacity="0.5"
                />
                <path
                  d="M350 9H130C63.1735 9 9 63.1735 9 130V350C9 416.826 63.1735 471 130 471H350C416.826 471 471 416.826 471 350V130C471 63.1735 416.826 9 350 9Z"
                  fill="#0A2725"
                  stroke="#134E4A"
                  stroke-width="18"
                />
                <path
                  d="M350 9H130C63.1735 9 9 63.1735 9 130V350C9 416.826 63.1735 471 130 471H350C416.826 471 471 416.826 471 350V130C471 63.1735 416.826 9 350 9Z"
                  stroke="#134E4A"
                  stroke-width="18"
                />
                <path
                  d="M115.5 122.5V166H100V239H115.5V270H100V342.5H115.5V372.5H130.5V388H174.5V431H231V401H249.5V431H307V388H351V372.5H364.5V344.5H380V270H364.5V256V238.5H380V209.5H364.5V123H349.5V107.5H335.5V50H321V62.5H307.5V77.5H290.5V64.5H188.5V77.5H173V64.5H160V50H144V107.5H129.5V122.5H115.5Z"
                  fill="#CDDFDE"
                />
                <rect
                  x="9"
                  y="9"
                  width="462"
                  height="462"
                  rx="121"
                  stroke="#134E4A"
                  stroke-width="18"
                ></rect>
              </svg>
            </Link>
          </div>
          <nav className="hidden grid-flow-col place-items-center gap-3.5 lg:grid lg:text-sm xl:text-base">
            <Link
              className="relative -my-2 grid rounded-full px-4 py-2 font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
              href="/"
              aria-current="page"
            >
              Главная
            </Link>
            <Link
              className="relative -my-2 grid rounded-full px-4 py-2 font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
              href="/rules"
            >
              Правила
            </Link>
            <Link
              className="relative -my-2 grid rounded-full px-4 py-2 font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
              href="/wiki"
            >
              Вики
            </Link>
            <Link
              className="relative -my-2 grid rounded-full px-4 py-2 font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
              href="/map"
            >
              Карта
            </Link>
          </nav>
          <div className="grid transform grid-flow-col items-center justify-end gap-1 opacity-100 md:gap-0">
            <div className="grid grid-flow-col items-center gap-1">
              <div className="relative" data-headlessui-state="">
                <button
                  className="grid overflow-hidden rounded-full p-2 transition hover:bg-zinc-200/25 dark:hover:bg-zinc-600/20"
                  aria-label="Цветовая тема"
                  title="Цветовая тема"
                  id="headlessui-listbox-button-:r0:"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-headlessui-state=""
                  onClick={() =>
                    theme == "dark" ? setTheme("light") : setTheme("dark")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                </button>
              </div>
              <a
                className="cz-color-12571693 cz-color-15460325 grid cursor-pointer grid-flow-col items-center gap-2.5 rounded-full p-2 font-medium text-teal-500 transition hover:bg-teal-200/25 dark:text-teal-400 dark:hover:bg-teal-600/10 md:-mr-4 md:px-4"
                aria-label="Авторизация"
                onClick={() => handleDiscordSignin()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
