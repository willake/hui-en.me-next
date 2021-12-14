import styles from '../styles/Layout.module.scss';
import React from 'react';
import Footer from './Footer';
import Contact from './Contact';
import Nav from './Nav';

const Layout: React.FC = ({ children }) => {

    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default Layout;