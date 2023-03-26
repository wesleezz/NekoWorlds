import Link from 'next/link'
import { Inter, Manrope } from 'next/font/google';
import { useTranslation } from 'next-i18next';
import styles from '../styles/Home.module.scss'

export default function Header() {
  const { t } = useTranslation('common');
  const inter = Inter({ subsets: ['latin'] });
  const manrope = Manrope({ subsets: ['latin'] });

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
