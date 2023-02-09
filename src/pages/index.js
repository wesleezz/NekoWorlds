import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/Home.module.scss'

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
          <div className={styles.description}>
          <div>
            <a
            >
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/power.png"
            alt="Power"
            width={260}
            height={288}
            priority
          />
        </div>

        <div className={styles.grid}>
        <link
            href="/index"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            <Image src="/house_3d.png" height={23} width={23} alt="house_3d" priority /> Главная <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Эта страница
            </p>
          </link>

          <link
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
          </link>

          <link
            href="https://docs.nekocorp.gq"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            <Image src="/bookmark_tabs_3d.png" height={23} width={23} alt="bookmark_tabs_3d" priority /> Вики <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              В разработке!
            </p>
          </link>

          <link
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
          </link>
        </div>
      </main>
    </>
  )
}
