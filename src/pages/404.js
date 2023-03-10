import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Cтраница не найдена</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
    <main className={styles.main}>
      <Header></Header>
      <div className={styles.center}>
      <div className={manrope.className}>
        <Image src="/magnifying_glass_tilted_left_3d.png" width="50" height="50" />
          <h1>404</h1>
          </div>
        </div>
      </main>
    </>
 )
}