import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'

export default function FourOhFour() {
  return <>
className={styles.center}
    <h1>404 - Страница не найдена</h1>
    <Link href="/">
      <a>
        Назад
      </a>
    </Link>
  </>
}
