import styles from '../../styles/Nav.module.scss';
import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
    return (
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
    );
};

export default Menu;