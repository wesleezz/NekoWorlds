import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

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

        <div className="container mx-auto px-6">
          <div className="left-safe-left right-safe-right bottom-safe-bottom pointer-events-none fixed z-10 grid place-items-end p-6 lg:hidden">
            <div className="pt-18 grid gap-12 lg:grid-cols-[13rem_1fr_11rem] lg:grid-rows-none lg:gap-8 xl:grid-cols-[16rem_1fr_14rem]">
              <div className="hidden lg:block">
                <div className="lg:top-18 -ml-6 h-[calc(100vh-4.5rem)] overflow-y-auto px-6 py-8 [--scrollbar-size:theme(width.3)] lg:sticky">
                  <div className="grid select-none">
                    <Link
                      className="relative -ml-3 grid grid grid-flow-col grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium text-teal-500 transition hover:bg-zinc-100 dark:text-teal-400 dark:hover:bg-zinc-800"
                      aria-current="page"
                      href="/wiki"
                    >
                      Введение
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500/75"></div>
                    </Link>
                    <Link
                      className="relative -ml-3 grid grid grid-flow-col grid-flow-col items-start items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm font-medium text-teal-500 transition hover:bg-zinc-100 dark:text-teal-400 dark:hover:bg-zinc-800"
                      href="/wiki/faq"
                    >
                      Часто задаваемые вопросы
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto grid h-full gap-8 px-6 lg:grid-cols-[13rem_1fr_11rem] xl:grid-cols-[16rem_1fr_14rem]">
            <div className="lg:mx-auto">
              <div className="grid items-start pb-12 lg:mt-8 lg:w-[32rem] xl:w-[40rem] 2xl:w-[48rem]">
                <div className="mb-6 grid w-full items-center justify-start gap-4 lg:grid-flow-col lg:justify-between">
                  <h1 className="font-manrope mt-11 text-3xl font-extrabold tracking-tight">
                    Введение
                  </h1>
                </div>
                <div className="prose prose-zinc dark:prose-invert prose-img:rounded-lg prose-headings:font-manrope prose-code:text-teal-600 dark:prose-code:text-teal-500 prose-pre:my-0 prose-pre:bg-transparent prose-pre:p-0 prose-pre:text-zinc-800 dark:prose-pre:text-zinc-200 prose-a:underline-offset-2 prose-a:transition prose-a:text-teal-600 prose-a:decoration-teal-300/50 hover:prose-a:text-teal-700 hover:prose-a:decoration-teal-400/50 dark:prose-a:text-teal-500 dark:prose-a:decoration-teal-700/50 dark:hover:prose-a:text-teal-300 dark:hover:prose-a:decoration-teal-500/50 max-w-full [&_li_p]:my-0">
                  <article>
                    <p>
                      Приветствуем вас это вики сервера NekoWorlds. Тут можно
                      найти и гайды и ответы на вопросы.
                    </p>
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
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
