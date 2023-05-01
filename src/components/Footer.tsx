import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="-mb-12 border-t border-zinc-100 bg-zinc-50/50 py-6 dark:border-zinc-800 dark:bg-zinc-800/30">
      <div className="container mx-auto grid gap-3 px-6">
        <div className="grid grid-cols-2 items-start sm:items-center">
          <div className="grid items-center justify-start gap-5 text-sm sm:grid-flow-col">
            <svg
              width="280"
              height="381"
              viewBox="0 0 280 381"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-teal-500"
            >
              <path
                d="M15.5 72.5V116H0V189H15.5V220H0V292.5H15.5V322.5H30.5V338H74.5V381H131V351H149.5V381H207V338H251V322.5H264.5V294.5H280V220H264.5V206V188.5H280V159.5H264.5V73H249.5V57.5H235.5V0H221V12.5H207.5V27.5H190.5V14.5H88.5V27.5H73V14.5H60V0H44V57.5H29.5V72.5H15.5Z"
                fill="#CDDFDE"
              />
            </svg>
            <div>
              Сервер является проектом <b>NekoWorlds</b>
            </div>
          </div>
          <div className="mt-1.5 grid grid-flow-col items-center justify-end gap-6 sm:mt-0">
            <Link
              className="-m-2 rounded-full p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
              href="/tg"
              aria-label="Telegram канал"
              title="Telegram канал"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M2.53419 10.491 20.4342 3.72755c.5979-.22564 1.2652.07521 1.4908.67307.0791.21021.0964.43779.0482.65668l-3.0857 14.0805c-.1562.7136-.8611 1.1658-1.5747 1.0086-.1774-.0385-.3442-.1138-.4918-.2198l-6.1453-4.4415c-.3694-.2671-.4533-.784-.1852-1.1543.0289-.0395.0617-.0771.0964-.1118l6.319-6.07213c.1311-.12632.135-.33557.0087-.46768-.109-.11282-.2826-.13404-.4156-.04918L7.88597 13.0975c-.5101.324-1.13978.3973-1.7116.1996l-3.618-1.2516c-.43103-.1485-.65957-.6201-.51107-1.0511.081-.2314.25939-.4166.48889-.5034Z" />
              </svg>
            </Link>
            <Link
              className="-m-2 rounded-full p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
              href="/ds"
              aria-label="Discord сервер"
              title="Discord сервер"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="-mx-4 grid justify-start text-sm lg:grid-flow-col">
          <Link
            className="rounded-full px-4 py-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            href="/contacts"
          >
            Контакты
          </Link>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Вдохновение сайта взято c <a href="https://p-l.cc">Pepeland.</a> We
          are in no way affiliated with or endorsed by Mojang, AB.
        </p>
      </div>
    </footer>
  );
}
