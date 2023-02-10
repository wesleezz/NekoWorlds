import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/Rules.module.scss'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Правила</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
    <main className={styles.main}>
      <div className={styles.center}>
      <div className={manrope.className}>
        <h1>Правила сервера</h1>
      </div>
      </div>
      <div className={styles.center}>
      <div className={inter.className}>
        <h2>Общие правила</h2>
          <ol>
            <li>
              Старайтесь никого не оскорблять и не унижать без ведомой на то причины.
            </li>
            <li>
              Запрещается пиар и реклама чего-либо не имеющего отношения к серверу.
            </li>
            <li>
              Запрещено засорять каналы бессмысленной информацией, а также спамить, флудить, оффтопить и все в таком роде.
            </li>
            <li>
              Запрещено выдавать себя за другую личность/администрацию сервера.
            </li>
            <li>
              NSFW, NSFL контент, скримеры, вирусы, краш-ссылки и прочее категорически запрещено.
            </li>
            <li>
              Запрещено использование багов ботов или дискорда в корыстных целях.
            </li>
          </ol>
          </div>
        </div>
      </main>
    </>
  )
}