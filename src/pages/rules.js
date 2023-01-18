import Head from 'next/head'
import Image from 'next/image'
import { ChangeColorScheme } from '../components/change-color-scheme/change-color-scheme'
import { Inter } from '@next/font/google'
import styles from '../styles/index.module.scss'

const inter = Inter({ subsets: ['latin'] })
const Rules = () => {
    return <div className={styles.center}>
             <h2 className={inter.className}> Правила </h2></div>
    }
    export default Rules