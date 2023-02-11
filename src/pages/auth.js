import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/Auth.module.css'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Авторизация</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={inter.className}>
          <div className={styles.button}>
              <a type="button" href="https://discord.com/api/oauth2/authorize?client_id=1001763225018318888&redirect_uri=https%3A%2F%2Fnekocorp.gq%2F&response_type=code&scope=identify"><Image src="/dsc.png" width="20" height="15" /> Discord</a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}