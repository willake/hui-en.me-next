import Image from 'next/image';
import styles from '../styles/Nav.module.scss';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import Link from 'next/link';
import Menu from './Nav/Menu';

const Nav: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    let menu = isOpen ? <Menu/> : <></>;

    return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <Link href="/">
                <Image src='/images/logo.svg' alt="logo" layout="fill"/>
            </Link>
        </div>
        <div className={styles.title}>
            Hui En Lin
        </div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <ul className={styles.links}>
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
        {menu}
    </nav>
    );
};

export default Nav;