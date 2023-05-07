import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

async function handleDiscordSignin() {
  signIn("discord", { callbackUrl: "https://nekocorp.gq" });
}

const handleCopy = () => {
  const text = "${session?.user.name}";
  navigator.clipboard.writeText(text);
};

export default function Page() {
  function handleSignOut() {
    signOut();
  }
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Head>
          <title>NekoWorlds › Профиль</title>
          <meta name="description" content="Ванильный сервер" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="NekoWorlds › Профиль" />
          <meta property="og:description" content="Ванильный сервер" />
          <meta property="og:image" content="/og_image.png" />
          <link rel="icon" href="/power.png" />
        </Head>
        <main className="mb-12 mt-24">
          {/* Хеадер */}
          <Header></Header>

          <div className="container mx-auto mt-64 grid h-full place-items-center px-6">
            <div className="grid place-items-center gap-8">
              <div className="grid place-items-center gap-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    alt=""
                    src={session?.user.image}
                    width={256}
                    height={256}
                    decoding="async"
                    data-nimg={1}
                    className="h-16 w-16 scale-100 rounded-full blur-0 grayscale-0 duration-700 ease-in-out"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h1 className="font-manrope not-prose group mt-1 scroll-mt-40 text-3xl font-bold tracking-tight lg:-ml-6 lg:grid lg:scroll-mt-24 lg:grid-cols-[auto_1fr] lg:items-center lg:justify-start lg:gap-2">
                  <button
                    className="-m-1.5 hidden p-1.5 text-zinc-800 opacity-0 transition hover:text-teal-600 focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0 dark:text-zinc-200 dark:hover:text-teal-500 lg:block"
                    id="copy-button"
                    onClick={handleCopy}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </button>
                  {session?.user.name}
                  <button
                    className="-mb-0.5 inline-block opacity-0 transition group-hover:opacity-100 lg:hidden"
                    id="copy-button"
                    onClick={handleCopy}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </button>
                </h1>
              </div>
              <div>
                <div className="-ml-4 mb-3 grid grid-flow-col items-center justify-between">
                  <button
                    className="mr-7 grid select-none grid-flow-col items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 outline-zinc-700 transition hover:bg-zinc-200 hover:text-black focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-zinc-300 dark:text-zinc-400 dark:hover:bg-zinc-500 dark:hover:text-white dark:active:bg-zinc-600"
                    id="change-account"
                    onClick={handleSignOut}
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
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    Изменить аккаунт
                  </button>
                  <div className="grid grid-flow-col items-center gap-2 text-sm font-medium">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      className="h-5 w-5"
                    >
                      <path d="M16 7.99983V4.50048C16 3.66874 16 3.25287 15.8248 2.9973C15.6717 2.77401 15.4346 2.62232 15.1678 2.57691C14.8623 2.52493 14.4847 2.6992 13.7295 3.04775L4.85901 7.14182C4.18551 7.45267 3.84875 7.6081 3.60211 7.84915C3.38406 8.06225 3.21762 8.32238 3.1155 8.60966C3 8.93462 3 9.30551 3 10.0473V14.9998M16.5 14.4998H16.51M3 11.1998L3 17.7998C3 18.9199 3 19.48 3.21799 19.9078C3.40973 20.2841 3.71569 20.5901 4.09202 20.7818C4.51984 20.9998 5.07989 20.9998 6.2 20.9998H17.8C18.9201 20.9998 19.4802 20.9998 19.908 20.7818C20.2843 20.5901 20.5903 20.2841 20.782 19.9078C21 19.48 21 18.9199 21 17.7998V11.1998C21 10.0797 21 9.51967 20.782 9.09185C20.5903 8.71552 20.2843 8.40956 19.908 8.21782C19.4802 7.99983 18.9201 7.99983 17.8 7.99983L6.2 7.99983C5.0799 7.99983 4.51984 7.99983 4.09202 8.21781C3.7157 8.40956 3.40973 8.71552 3.21799 9.09185C3 9.51967 3 10.0797 3 11.1998ZM17 14.4998C17 14.776 16.7761 14.9998 16.5 14.9998C16.2239 14.9998 16 14.776 16 14.4998C16 14.2237 16.2239 13.9998 16.5 13.9998C16.7761 13.9998 17 14.2237 17 14.4998Z" />
                    </svg>
                    0 €
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>NekoWorlds › Профиль</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="NekoWorlds › Профиль" />
        <meta property="og:description" content="Ванильный сервер" />
        <meta property="og:image" content="/og_image.png" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className="mb-12 mt-24">
        {/* Хеадер */}
        <Header></Header>

        <div className="container mx-auto mt-64 grid h-full place-items-center px-6">
          <div className="grid place-items-center gap-8">
            <div className="grid place-items-center gap-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  alt=""
                  src="/maple_leaf_3d.png"
                  width={256}
                  height={256}
                  decoding="async"
                  data-nimg={1}
                  className="h-16 w-16 scale-100 rounded-full blur-0 grayscale-0 duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
              <h1 className="font-manrope text-center text-3xl font-bold tracking-tight">
                Вы не вошли в аккаунт..
              </h1>
              <p className="text-lg">войдите чтобы увидеть профиль</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
