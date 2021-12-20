import styles from '../../styles/Nav.module.scss';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { AiOutlineClose } from "react-icons/ai";

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
                    <AiOutlineClose size={46}/>
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
            </ul>
        </div>
    </>
    );
};

export default Menu;