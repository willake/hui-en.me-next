import Image from 'next/image';
import styles from '../styles/Nav.module.scss';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import Link from 'next/link';
import Menu from './Nav/Menu';
import classNames from 'classnames';

const Nav: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    }

    let menu = isOpen ? <Menu isOpen={isOpen} closeMenu={closeMenu}/> : <></>;

    return (
    <nav className={styles.nav}>
        <div className={classNames(styles.logo, 'hoverable')}>
            <Link href="/">
                <a><Image src='/images/logo.svg' alt="logo" layout="fill"/></a>
            </Link>
        </div>
        <div className={styles.title}>
            <h1 className={classNames('xl', 'colorWhite')}>Hui En Lin</h1>
        </div>
        <div className={styles.menuButton}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={styles.links}>
            <ul>
                <li className={'hoverable'}>
                    <Link href="/">
                        <a className={classNames('xl', 'colorWhite')}>Home</a>
                    </Link>
                </li>
                <li className={'hoverable'}>
                    <Link href="/about">
                        <a className={classNames('xl', 'colorWhite')}>About Me</a>
                    </Link>
                </li>
            </ul>
        </div>
        {menu}
    </nav>
    );
};

export default Nav;