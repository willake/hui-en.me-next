import styles from '../../styles/Nav.module.scss';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { FaTimes } from "react-icons/fa";

type Props = {
    isOpen: boolean,
    closeMenu: () => void
}

const Menu: React.FC<Props> = ({isOpen, closeMenu}) => {
    return (
    <>
        <div onClick={closeMenu} className={styles.dim}></div>
        <div className={styles.menu}>
            <div className={styles.menuHeader}>
                <div onClick={closeMenu} className={classNames(styles.closeButton, 'colorWhite')}>
                    <FaTimes size={46}/>
                </div>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a onClick={closeMenu} className={classNames('xl', 'colorWhite')}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a onClick={closeMenu} className={classNames('xl', 'colorWhite')}>About</a>
                    </Link>
                </li>
                <li>    
                    <Link href="/#portfolio">
                        <a onClick={closeMenu} className={classNames('xl', 'colorWhite')}>Portfolio</a>
                    </Link>
                </li>
            </ul>
        </div>
    </>
    );
};

export default Menu;