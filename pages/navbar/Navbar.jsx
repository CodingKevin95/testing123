'use client';
import react from 'react';
import styles from './Navbar.module.css'
import Image from 'next/image'
import Logo2 from '../assets/Kevin-Son-1.png'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    const links = [
        {
            href: '/',
            text:'About',
            url: '#home'
        },
        {
            href: '/techStack',
            text: 'Tech Stack',
            url: '#techStack'
        },
        {
            href: '/portfolio',
            text:'Portfolio',
            url: '#portfolio'
        },
        {
            href: '/contact',
            text:'Contact',
            url: '#contact'
        },
    ]

    const path = usePathname()

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarNav}>
                <Link href='/'>
                    <Image
                        src={Logo2}
                        alt="Logo"
                        width="125"
                        height="125"
                        priority
                    />
                </Link>
                <div className={styles.rightMenu}>
                    <ul className={styles.menu}>
                        { links.map((link, i) => {
                            return (
                            <Link key={i} className={styles.tabs} href={link.url}>
                                <li key={link.id} className={`${link.url === path ? `${styles.tab}` : `${styles.noClickTab}`}`}>
                                    {link.text}
                                </li>
                            </Link>
                            );
                        }) }
                    </ul>
                </div>
                <div className={styles.hamburgerMenu} onClick={handleNav}>
                    <AiOutlineMenu className={styles.hamburgerMenu2} />
                </div>
            </div>
            <div className={
                menuOpen
                ? `${styles.openMenu}` : `${styles.closedMenu}`
            }>
            <div className={styles.xButton}>
                <div onClick={handleNav} className={styles.x}>
                    <AiOutlineClose />
                </div>
            </div>
            <div className={styles.hamburgerMenuTabs}>
                <ul className={styles.menu}>
                    <Link href='/' className={styles.tabs}>
                        <li className={styles.tab}
                        onClick={() => setMenuOpen(false)}
                        >
                            About
                        </li>
                    </Link>
                    <Link href='/portfolio' className={styles.tabs}>
                        <li className={styles.tab}
                        onClick={() => setMenuOpen(false)}
                        >
                            Portfolio
                        </li>
                    </Link>
                    <Link href='/contact' className={styles.tabs}>
                        <li className={styles.tab}
                        onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </li>
                    </Link>
                    <Image
                        src={Logo2}
                        alt="Logo"
                        width="125"
                        height="125"
                        // className="cursor-pointer"
                        priority
                    />
                </ul>
            </div>
            </div>
        </nav>
    )
}