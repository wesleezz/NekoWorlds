import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Inter } from '@next/font/google'
import styles from '../styles/navigation.module.scss'

export default function Navigation() {
    return (
        <div className = {styles.navigation}>
        <div className={inter.className}>
            
            <Link href='/'>
                <a><Image src="/power-1.png" width="48" height="39"></Image></a>
            </Link>

            <Link href='/'>
                <a>Главная</a>
            </Link>

            <Link href='/about/'>
                <a>О сервере</a>
            </Link>
            
            <Link href='/rules/'>
                <a>Правила</a>
            </Link>
                        <a href="https://dsc.gg/nekocorp" target="_blank" rel="noreferrer">Discord</a>
        </div>
        </div>
    )
}