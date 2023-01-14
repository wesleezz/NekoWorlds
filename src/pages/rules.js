import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/index.module.scss'

const inter = Inter({ subsets: ['latin'] })
const Rules = () => {
    return <h2 className={inter.className}> Правила <span>-&gt;</span></h2>
    }
    export default Rules