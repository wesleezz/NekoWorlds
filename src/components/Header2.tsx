import Link from "next/link";
import { Inter, Manrope } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function Header() {
  return (
    <main className="flex items-center flex-col pb-6 px-30 vh-100 -mt-16">
      <header className="flex justify-between items-center">
        <nav className="hidden md:block">
          <ul className={styles.menubar}>
            <Link href="/">Главная</Link>
            <Link href="/rules">Правила</Link>
            <Link href="/wiki">Вики</Link>
            <Link href="/map">Карта</Link>
            <Link href="/dashboard">Авторизация</Link>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="mobile-menu-button">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="menu-icon w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H3zm0 5a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H3zm0 5a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mobile-menu md:hidden hidden">
          <ul className="flex flex-col space-y-4">
            <Link href="/">Главная</Link>
            <Link href="/rules">Правила</Link>
            <Link href="/wiki">Вики</Link>
            <Link href="/map">Карта</Link>
            <Link href="/dashboard">Авторизация</Link>
          </ul>
        </div>
      </header>
    </main>
  );
}
