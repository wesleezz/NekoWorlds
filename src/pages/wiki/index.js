import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter, Manrope } from "@next/font/google";
import Header from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Вики · Введение</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mt-24 mb-12">
        <Header></Header>

        <div className="container px-6 mx-auto grid h-full gap-8 lg:grid-cols-[13rem_1fr_11rem] xl:grid-cols-[16rem_1fr_14rem]">
          <div className="lg:mx-auto">
            <div className="grid items-start pb-12 lg:mt-8 lg:w-[32rem] xl:w-[40rem] 2xl:w-[48rem]">
              <div className="mb-6 grid items-center justify-start lg:justify-between gap-4 lg:grid-flow-col w-full">
                <h1 className="font-manrope text-3xl font-extrabold tracking-tight">
                  Введение
                </h1>
              </div>
              <div className="prose prose-zinc max-w-full dark:prose-invert prose-img:rounded-lg prose-headings:font-manrope prose-code:text-teal-600 dark:prose-code:text-teal-500 prose-pre:my-0 prose-pre:bg-transparent prose-pre:p-0 prose-pre:text-zinc-800 dark:prose-pre:text-zinc-200 prose-a:underline-offset-2 prose-a:transition prose-a:text-teal-600 prose-a:decoration-teal-300/50 hover:prose-a:text-teal-700 hover:prose-a:decoration-teal-400/50 dark:prose-a:text-teal-500 dark:prose-a:decoration-teal-700/50 dark:hover:prose-a:text-teal-300 dark:hover:prose-a:decoration-teal-500/50 [&amp;_li_p]:my-0">
                <article>
                  <p>
                    Приветствуем вас это вики сервера NekoWorlds. Тут можно
                    найти и гайды и ответы на вопросы.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
