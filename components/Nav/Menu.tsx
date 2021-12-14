import styles from '../../styles/Nav.module.scss';
import React from 'react';
import Link from 'next/link';

type Props = {
    closeMenu: () => void
}

const Menu: React.FC<Props> = ({closeMenu}) => {

    return (
    <>
        <div onClick={closeMenu} className={styles.dim}></div>
        <div className={styles.menu}>
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
    </>
    );
};

export default Menu;