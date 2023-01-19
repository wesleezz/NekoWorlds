import React from "react"
import styles from './navigation.module.scss'
import Link from 'next/link'
import Image from "next/image"

export default function Navigation() {
    return (
        <div className = {styles.navigation}>
            
            <Link href='/'>
                <a><image src="/power-1.png" width="48" height="39"></image></a>
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
                        <a href="https://github.com/plasmoapp/minecraft-status" target="_blank" rel="noreferrer">GitHub</a>
        </div>
    )
}