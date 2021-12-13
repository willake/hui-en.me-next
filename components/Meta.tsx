import Image from 'next/image';
import styles from '../styles/Nav.module.scss';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';

const Nav: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <a className={styles.logo}>
                <Image src='/images/coin.svg' alt="logo" layout="fill"/>
            </a>
            <h1>ChiHuaHua</h1>
            <div className={styles.hamburger}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </nav>
    );
};

export default Nav;