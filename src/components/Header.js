import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export default function Header() {
  return (
    <ul className={styles.menubar}>
    <Link href="/">Главная</Link>
    <Link href="/rules">Правила</Link>
    <Link href="/wiki">Вики</Link>
    <Link href="/map">Карта</Link>
    <Link href="/dashboard">Авторизация</Link>
  </ul>
  )
}
