import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";

async function handleDiscordSignin() {
  signIn("discord", { callbackUrl: "https://nekocorp.gq" });
}

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="px-30 vh-100 -mt-16 flex flex-col items-center pb-6">
      <header className="h-18 supports-backdrop-blur:backdrop-blur supports-backdrop-blur:bg-white/75 supports-backdrop-blur:dark:bg-zinc-900/75 max-w-8xl fixed z-50 mx-4 mx-auto -mt-8 grid w-full select-none items-center border-b border-slate-900/10 border-zinc-100/50 bg-white py-4 backdrop-blur backdrop-saturate-150 transition dark:border-slate-300/10 dark:border-zinc-800/50 dark:bg-zinc-900/80 lg:mx-0 lg:border-0 lg:px-8">
        <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-6">
          <div className="lg:hidden">
            <div data-headlessui-state="">
              <button
                className="-ml-3 grid h-10 w-10 place-items-center rounded-full transition hover:bg-zinc-200/25 dark:hover:bg-zinc-600/20"
                type="button"
                data-headlessui-state=""
                id="headlessui-popover-button-:R4mt6:"
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid items-center justify-start">
            <Link
              className="block transition hover:opacity-90 active:scale-90"
              href="/"
            >
              <Image src="/powerpow.png" alt="powepow" width="45" height="45" />
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
