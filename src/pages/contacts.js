import Head from "next/head";
import Image from "next/image";
import { Inter, Manrope } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Контакты</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mt-24 mb-12">
        <Header></Header>

        <div className="grid items-center justify-center">
          <div className="mb-8 grid place-items-center gap-4">
            <h1 className="font-manrope text-3xl font-extrabold tracking-tight mt-14">
              Контакты
            </h1>
          </div>
          <div className="container px-6 mx-auto grid gap-8 lg:grid-cols-2">
            <div className="">
              <div className="grid w-96 gap-5 rounded-lg p-5 bg-zinc-50/50 dark:bg-zinc-800/40 ring-1 ring-inset ring-black/10 dark:ring-zinc-600/30">
                <div className="grid grid-flow-col items-center justify-start gap-3 text-md font-medium">
                  <Image
                    src="/Wesleezz69.png"
                    width="35"
                    height="35"
                    className="rounded"
                  />{" "}
                  Wesleezz69
                </div>
                <a
                  className="grid grid-flow-col items-center justify-center font-medium transition select-none px-5 py-2.5 gap-2.5 bg-zinc-100 dark:text-zinc-100 text-zinc-900 ring-1 ring-inset ring-black/15 dark:bg-zinc-700 dark:ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-750 dark:active:bg-zinc-600 rounded-lg"
                  href="https://t.me/wesleezz"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M2.53419 10.491 20.4342 3.72755c.5979-.22564 1.2652.07521 1.4908.67307.0791.21021.0964.43779.0482.65668l-3.0857 14.0805c-.1562.7136-.8611 1.1658-1.5747 1.0086-.1774-.0385-.3442-.1138-.4918-.2198l-6.1453-4.4415c-.3694-.2671-.4533-.784-.1852-1.1543.0289-.0395.0617-.0771.0964-.1118l6.319-6.07213c.1311-.12632.135-.33557.0087-.46768-.109-.11282-.2826-.13404-.4156-.04918L7.88597 13.0975c-.5101.324-1.13978.3973-1.7116.1996l-3.618-1.2516c-.43103-.1485-.65957-.6201-.51107-1.0511.081-.2314.25939-.4166.48889-.5034Z"></path>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
            <div className="">
              <div className="grid w-96 gap-5 rounded-lg p-5 bg-zinc-50/50 dark:bg-zinc-800/40 ring-1 ring-inset ring-black/10 dark:ring-zinc-600/30">
                <div className="grid grid-flow-col items-center justify-start gap-3 text-md font-medium">
                  <Image
                    src="/Klore.png"
                    width="35"
                    height="35"
                    className="rounded"
                  />{" "}
                  Klore
                </div>
                <a
                  className="grid grid-flow-col items-center justify-center font-medium transition select-none px-5 py-2.5 gap-2.5 bg-zinc-100 dark:text-zinc-100 text-zinc-900 ring-1 ring-inset ring-black/15 dark:bg-zinc-700 dark:ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-750 dark:active:bg-zinc-600 rounded-lg"
                  href="https://t.me/newdlez"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M2.53419 10.491 20.4342 3.72755c.5979-.22564 1.2652.07521 1.4908.67307.0791.21021.0964.43779.0482.65668l-3.0857 14.0805c-.1562.7136-.8611 1.1658-1.5747 1.0086-.1774-.0385-.3442-.1138-.4918-.2198l-6.1453-4.4415c-.3694-.2671-.4533-.784-.1852-1.1543.0289-.0395.0617-.0771.0964-.1118l6.319-6.07213c.1311-.12632.135-.33557.0087-.46768-.109-.11282-.2826-.13404-.4156-.04918L7.88597 13.0975c-.5101.324-1.13978.3973-1.7116.1996l-3.618-1.2516c-.43103-.1485-.65957-.6201-.51107-1.0511.081-.2314.25939-.4166.48889-.5034Z"></path>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
