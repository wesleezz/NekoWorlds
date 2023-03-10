import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NekoWorlds</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
      <main className={styles.main}>
        <Header></Header>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/power.png"
            alt="power"
            width={360}
            height={380}
            priority
          />
        </div>

        <div className={styles.grid}>
          <Link
            href="/"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              <Image src="/house_3d.png" height={23} width={23} alt="house_3d" priority /> Главная <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Эта страница
            </p>
          </Link>

          <Link
            href="/rules"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              <Image src="/open_book_3d.png" height={23} width={23} alt="open_book_3d" priority /> Правила <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Тут можно узнать правила
            </p>
          </Link>

          <Link
            href="/wiki"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              <Image src="/bookmark_tabs_3d.png" height={23} width={23} alt="bookmark_tabs_3d" priority /> Вики <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              В разработке!
            </p>
          </Link>

          <Link
            href="/map"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              <Image src="/world_map_3d.png" height={23} width={23} alt="world_map_3d" priority /> Карта <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Просто вебкарта сервера
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
