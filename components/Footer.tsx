import styles from '../styles/Footer.module.scss';
import React from 'react';

const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <h2 className={styles.footerCopyright}>Copyright © Hui En Lin, 2016 - 2021</h2>
        </footer>
    );
};

export default Footer;