import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link'

export default function FourOhFour() {
  return <>
      404 - Страница не найдена</h1>
    <Link href="/">
      <a>
        Назад
      </a>
    </Link>
  </>
}
