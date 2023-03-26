import Image from 'next/image'
import Link from 'next/Link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })
const { t } = useTranslation('common');

export default function Header() {
  return (
    <ul className={styles.menubar}>
      <Link href="/">{t('Home')}</Link>
      <Link href="/rules">{t('Rules')}</Link>
      <Link href="/wiki">{t('Wiki')}</Link>
      <Link href="/map">{t('Map')}</Link>
      <Link href="/dashboard">{t('Auth')}</Link>
    </ul>
  )
}
