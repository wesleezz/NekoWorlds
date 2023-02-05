import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import Navigation from 'src/components/Navigation/navigation.js'
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
      <Navigation></Navigation>
      <div className={styles.center}>
      <div className={manrope.className}>
        <h1>Правила</h1>
      </div>
      </div>
      <div className={styles.center}>
      <div className={inter.className}>
        <p>
         Основное правило - быть нормисом, сервер создан для адекватного общения а также вы должны соблюдать следующие правила:
         1.1 Старайтесь никого не оскорблять и не унижать без ведомой на то причины.
         1.2 Запрещается пиар и реклама чего-либо не имеющего отношения к серверу.
         1.3 Запрещено засорять каналы бессмысленной информацией, а также спамить, флудить, оффтопить и все в таком роде.
         1.4 Запрещено выдавать себя за другую личность/администрацию сервера.
         1.5 NSFW, NSFL контент, скримеры, вирусы, краш-ссылки и прочее категорически запрещено.
         1.6 Запрещено использование багов ботов или дискорда в корыстных целях.
        </p>
      </div>
      </div>
    </>
 )
}