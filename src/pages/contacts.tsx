import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>Контакты · NekoWorlds</title>
        <meta name="description" content="Ванильный сервер для каждого пространство где уютно и лампово" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-title" content="NekoWorlds" />
        <meta property="og:site_name" content="NekoWorlds" />
        <meta property="og:title" content="Контакты" />
        <meta property="og:description" content="Ванильный сервер для каждого пространство где уютно и лампово" />
        <meta property="og:image" content="/og_image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og_image.png" />
      </Head>
      <main className="mb-12 mt-24">
        <Header></Header>

        <div className="grid items-center justify-center">
          <div className="mb-8 grid place-items-center gap-4">
            <h1 className="font-manrope mt-14 text-3xl font-extrabold tracking-tight">
              Контакты
            </h1>
          </div>
          <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-2">
            <div className="">
              <div className="grid w-96 gap-5 rounded-lg bg-zinc-50/50 p-5 ring-1 ring-inset ring-black/10 dark:bg-zinc-800/40 dark:ring-zinc-600/30">
                <div className="text-md grid grid-flow-col items-center justify-start gap-3 font-medium">
                  <Image
                    src="/heads/Wesleezz69.png"
                    alt="Wesleezz69"
                    width="35"
                    height="35"
                    className="rounded"
                  />{" "}
                  Wesleezz69
                </div>
                <a
                  className="ring-black/15 dark:ring-white/15 grid select-none grid-flow-col items-center justify-center gap-2.5 rounded-lg bg-zinc-100 px-5 py-2.5 font-medium text-zinc-900 outline-zinc-700 ring-1 ring-inset transition hover:bg-zinc-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 dark:active:bg-zinc-500"
                  href="https://t.me/wesleezz"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M2.53419 10.491 20.4342 3.72755c.5979-.22564 1.2652.07521 1.4908.67307.0791.21021.0964.43779.0482.65668l-3.0857 14.0805c-.1562.7136-.8611 1.1658-1.5747 1.0086-.1774-.0385-.3442-.1138-.4918-.2198l-6.1453-4.4415c-.3694-.2671-.4533-.784-.1852-1.1543.0289-.0395.0617-.0771.0964-.1118l6.319-6.07213c.1311-.12632.135-.33557.0087-.46768-.109-.11282-.2826-.13404-.4156-.04918L7.88597 13.0975c-.5101.324-1.13978.3973-1.7116.1996l-3.618-1.2516c-.43103-.1485-.65957-.6201-.51107-1.0511.081-.2314.25939-.4166.48889-.5034Z"></path>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
            <div className="">
              <div className="grid w-96 gap-5 rounded-lg bg-zinc-50/50 p-5 ring-1 ring-inset ring-black/10 dark:bg-zinc-800/40 dark:ring-zinc-600/30">
                <div className="text-md grid grid-flow-col items-center justify-start gap-3 font-medium">
                  <Image
                    src="/heads/Klore.png"
                    alt="Klore"
                    width="35"
                    height="35"
                    className="rounded"
                  />{" "}
                  Klore
                </div>
                <a
                  className="ring-black/15 dark:ring-white/15 grid select-none grid-flow-col items-center justify-center gap-2.5 rounded-lg bg-zinc-100 px-5 py-2.5 font-medium text-zinc-900 outline-zinc-700 ring-1 ring-inset transition hover:bg-zinc-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600 dark:active:bg-zinc-500"
                  href="https://t.me/newdlez"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-6 w-6"
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
