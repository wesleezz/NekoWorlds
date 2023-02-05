import Head from 'next/head'
import Image from 'next/image'
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
      <div className = {styles.navigation}>
            
            <Link href='/'>
                <a><Image src="/power-1.png" width="48" height="39"></Image></a>
            </Link>

            <Link href='/'>
                <a>Главная</a>
            </Link>

            <Link href='/about/'>
                <a>О сервере</a>
            </Link>
            
            <Link href='/rules/'>
                <a>Правила</a>
            </Link>
                        <a href="https://dsc.gg/nekocorp" target="_blank" rel="noreferrer">Discord</a>
      </div>
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