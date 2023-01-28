import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/404.module.scss'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
      <Head>
        <title>Cтраница не найдена</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power-1.png" />
      </Head>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/magnifying_glass_tilted_left_3d.png"
          alt="magnifying_glass_tilted_left_3d"
          width={50}
          height={50}
          priority
        />
      </div>
      <div className={styles.center}>
      <div className={manrope.className}>
        <h1>404</h1>
      </div>
      </div>
      <div className={styles.center}>
      <div className={inter.className}>
        <h5>Мы искали везде но не смогли найти эту старницу</h5>
      </div>
      </div>
      <Link
        href="/">Назад
      </Link>
    </>
 )
}