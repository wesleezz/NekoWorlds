import Link from 'next/link'
import { Inter, Manrope } from '@next/font/google';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export default function Header() {
  const { t } = useTranslation('common');
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
