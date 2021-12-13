import Image from 'next/image';
import styles from '../styles/Nav.module.scss';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import classNames from 'classnames';

const Nav: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={classNames(styles.nav, styles.navMobile)}>
        <div className={styles.navBar}>
            <a title="Home" className={styles.navLogo} href="/"></a>
            <a title="Home" className={styles.title} href="/">Hui En Lin</a>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={styles.navDropdown}>
            <a title="About" className={styles.navDropdownItem} href="/about">About</a>
            <a title="Portfolio" className={styles.navDropdownItem} href="/#portfolio">Portfolio</a>
            <a title="Experience" className={styles.navDropdownItem} href="/about#experience">Experience</a>
            <a title="Contact" className={styles.navDropdownItem} href="/#contact">Contact</a>
        </div>
    </nav>
    );
};

export default Nav;