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
        <title>NekoWorlds › Карта</title>
        <meta name="description" content="Ванильный сервер" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/power.png" />
      </Head>
      <iframe title="NekoWorlds › Карта" src="https://maps.nekocorp.gq:61128" width="2000"></iframe>
    </>
  )
}