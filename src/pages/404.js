import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/rgb.module.scss'

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
      <div className={styles.center}>
      <div className={manrope.className}>
        <h1>404</h1>
        <p>мы ничего не нашли</p>
      </div>
      </div>
    </>
 )
}