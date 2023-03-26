import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { Manrope } from '@next/font/google'
import styles from '../styles/Auth.module.scss'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export default function Header() {
  return (
    <div className={styles.button}>
      <a type="button" href="https://discord.com/api/oauth2/authorize?client_id=1001763225018318888&redirect_uri=https%3A%2F%2Fnekocorp.gq%2F&response_type=code&scope=identify"><Image src="/dsc.png" alt="dsc" width="20" height="15" /> Discord</a>
    </div>
  )
}