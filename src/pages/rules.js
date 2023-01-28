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
      <section className={styles.headingMd}>
      <div className={styles.center}>
      <div className={manrope.className}>
        <h1>Правила</h1>
      </div>
      </div>
      </section>
    </>
 )
}