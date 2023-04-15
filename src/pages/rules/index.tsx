import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter, Manrope } from "@next/font/google";
import Header from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Правила</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mt-24 mb-12">
        <Header></Header>

        <div className="container mx-auto px-6">
          <div className="mb-6 text-center text-4xl font-bold dark:text-gray-50 mt-32">
            Правила
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl px-6 lg:grid-flow-col lg:justify-between lg:px-3">
          <Link
            className="inline-grid select-none grid-flow-col items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-medium transition hover:bg-gray-300/20 focus-visible:ring-gray-400 active:bg-gray-300/30 dark:hover:bg-gray-200/10 dark:active:bg-gray-200/20"
            href="/rules"
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              ></path>
            </svg>
            Minecraft
          </Link>
          <Link
            className="inline-grid select-none grid-flow-col items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-medium transition hover:bg-gray-300/20 focus-visible:ring-gray-400 active:bg-gray-300/30 dark:hover:bg-gray-200/10 dark:active:bg-gray-200/20"
            href="/rules/discord"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
            </svg>
            Discord
          </Link>
        </div>
        <div className="mt-5 mb-5 px-6 gap-2">
          <div className="mx-auto grid max-w-3xl gap-2 px-6 leading-relaxed lg:px-3">
            <p>Данные правила распространяются на весь Minecraft сервер.</p>
            <p>
              Модератор сам выберает наказани это может быть от предуприждения
              до бана.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          <section className="mx-auto max-w-3xl px-6 leading-relaxed text-gray-800 dark:text-gray-200 lg:px-3">
            <ul className="grid list-inside list-disc gap-2 lg:list-outside">
              <li
                id="_rule_0"
                className="rounded-lg target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:target:bg-yellow-300/10"
              >
                Нельзя строить ваш дом либо постройку ближе чем 350 блоков от
                спавна.
              </li>
              <li
                id="_rule_1"
                className="rounded-lg target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:target:bg-yellow-300/10"
              >
                Гриферство полностью запрещено на сервере и очень строго
                карается.
              </li>
              <li
                id="_rule_2"
                className="rounded-lg target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:target:bg-yellow-300/10"
              >
                Хранение читов запрещено в любом виде хоть ресурспак хоть мод.
              </li>
              <li
                id="_rule_3"
                className="rounded-lg target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:target:bg-yellow-300/10"
              >
                Продавать в любой другой валюте кроме алмазов запрещено.
              </li>
              <li
                id="_rule_4"
                className="rounded-lg target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:target:bg-yellow-300/10"
              >
                Пвп в публичных местах такие как спавн без причины карается.
              </li>
              <li
                id="_rule_5"
                className="rounded-lg target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:target:bg-yellow-300/10"
              >
                Не попрощайкайте ресурсы у хелперов это ведь бесполезно.
              </li>
              <li
                id="_rule_6"
                className="rounded-lg target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:target:bg-yellow-300/10"
              >
                Не занимайте большую терреторию для маленьких построек.
              </li>
              <li
                id="_rule_7"
                className="rounded-lg target:-mx-4 target:scroll-mt-48 target:bg-yellow-300/20 target:px-4 target:py-3 dark:target:bg-yellow-300/10"
              >
                Перед использованием мода обязательно спросите хелпера либо
                посмотрите список запрещённых модов.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
