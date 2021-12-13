import Image from 'next/image';
import styles from '../styles/DesktopNav.module.scss';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import classNames from 'classnames';

const Nav: React.FC = () => {
    return (
        <nav className={classNames(styles.nav, styles.navDesktop)}>
            <a title="Home" className={styles.navLogo} href="/"></a>
            <a title="About" className={styles.navLink} href="/about">About</a>
            <a title="Portfolio" className={styles.navLink} href="/#portfolio">Portfolio</a>
            <a title="Experience" className={styles.navLink} href="/about#experience">Experience</a>
            <a title="Contact" className={styles.navLink} href="/#contact">Contact</a>
        </nav>
    );
};

export default Nav;