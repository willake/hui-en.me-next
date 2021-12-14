import Image from 'next/image';
import styles from '../styles/Nav.module.scss';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import Link from 'next/link';
import Menu from './Nav/Menu';

const Nav: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    }

    let menu = isOpen ? <Menu closeMenu={closeMenu}/> : <></>;

    return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <Link href="/">
                <Image src='/images/logo.svg' alt="logo" layout="fill"/>
            </Link>
        </div>
        <div className={styles.title}>
            <h1>Hui En Lin</h1>
        </div>
        <div className={styles.menuButton}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={styles.links}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>    
                    <Link href="/#portfolio">
                        <a>Portfolio</a>
                    </Link>
                </li>
            </ul>
        </div>
        {menu}
    </nav>
    );
};

export default Nav;