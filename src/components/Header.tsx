import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <main className="flex items-center flex-col pb-6 px-30 vh-100 -mt-16">
      <header className="fixed z-50 grid h-18 w-full select-none items-center border-b transition bg-white dark:bg-zinc-900/80 supports-backdrop-blur:backdrop-blur supports-backdrop-blur:bg-white/75 supports-backdrop-blur:dark:bg-zinc-900/75 backdrop-saturate-150 border-zinc-100/50 dark:border-zinc-800/50 backdrop-blur mx-auto max-w-8xl py-4 border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0 -mt-8">
        <div className="container px-6 mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6">
          <div className="lg:hidden">
            <div data-headlessui-state="">
              <button
                className="grid h-10 w-10 place-items-center rounded-full transition -ml-3 hover:bg-zinc-200/25 dark:hover:bg-zinc-600/20"
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
              className="relative grid rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800 -my-2 px-4 py-2 font-medium text-zinc-600 hover:text-black dark:text-zinc-200 dark:hover:text-white"
              href="/"
              aria-current="page"
            >
              Главная
            </Link>
            <Link
              className="relative grid rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800 -my-2 px-4 py-2 font-medium text-zinc-600 hover:text-black dark:text-zinc-200 dark:hover:text-white"
              href="/rules"
            >
              Правила
            </Link>
            <Link
              className="relative grid rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800 -my-2 px-4 py-2 font-medium text-zinc-600 hover:text-black dark:text-zinc-200 dark:hover:text-white"
              href="/wiki"
            >
              Вики
            </Link>
            <Link
              className="relative grid rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800 -my-2 px-4 py-2 font-medium text-zinc-600 hover:text-black dark:text-zinc-200 dark:hover:text-white"
              href="/map"
            >
              Карта
            </Link>
          </nav>
        </div>
      </header>
    </main>
  );
}
