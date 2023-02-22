import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/Contacts.module.scss'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
      <Head>
        <title>NekoWorlds › Контакты</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
    <main className={styles.main}>
      <Header></Header>
        <div className={styles.center}>
        <div className={manrope.className}>
            <h1>Контакты</h1>
        </div>
        </div>
        <div className={styles.grid}>
        <div className={inter.className}>
        </div>
        </div>
      </main>
    </>
  )
}