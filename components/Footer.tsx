import styles from '../styles/Footer.module.scss';
import React from 'react';
import classNames from 'classnames';

const Footer: React.FC = () => {

    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <h2 className={classNames(styles.footerCopyright, 'm', 'colorWhite')}>Copyright © Hui En Lin, 2016 - {year}</h2>
        </footer>
    );
};

export default Footer;