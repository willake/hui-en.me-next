import styles from '../styles/Layout.module.scss';
import React from 'react';
import Footer from './Footer';
import Contact from './Contact';

const Layout: React.FC = ({ children }) => {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
            <Contact />
            <Footer />
        </div>
    );
};

export default Layout;