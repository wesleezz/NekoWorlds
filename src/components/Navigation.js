import Image from "next/image";
import Link from "next/link";
import { Inter, Manrope } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function Navigation() {
  return (
    <main className="">
      <div className="container px-6 mx-auto">
        <div className="pointer-events-none fixed left-safe-left right-safe-right bottom-safe-bottom z-10 grid place-items-end p-6 lg:hidden">
          <div className="grid gap-12 pt-18 lg:grid-cols-[13rem_1fr_11rem] lg:grid-rows-none lg:gap-8 xl:grid-cols-[16rem_1fr_14rem]">
            <div className="hidden lg:block">
              <div className="-ml-6 h-[calc(100vh-4.5rem)] overflow-y-auto py-8 px-6 [--scrollbar-size:theme(width.3)] lg:sticky lg:top-18">
                <div className="grid select-none">
                  <Link
                    className="relative grid grid-flow-col items-start justify-start text-sm -ml-3 rounded-lg px-3 py-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium text-teal-500 dark:text-teal-400 grid grid-flow-col items-center gap-2"
                    aria-current="page"
                    href="/wiki"
                  >
                    Введение
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500/75"></div>
                  </Link>
                  <Link
                    className="relative grid grid-flow-col items-start justify-start text-sm -ml-3 rounded-lg px-3 py-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium text-teal-500 dark:text-teal-400 grid grid-flow-col items-center gap-2"
                    href="/wiki/faq"
                  >
                    Часто задаваемые вопросы
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
