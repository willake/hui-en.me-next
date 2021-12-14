import styles from '../styles/Contact.module.scss';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from 'react';

const Contact: React.FC = () => {

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactButton}>
                <a title="Email Contact" className={styles.contactButtonLink} href="mailto:willakelin@gmail.com">
                    Contact me
                </a>
            </div>
            <div className={styles.contactEmail}>willakelin@gmail.com</div>
            <div className={styles.contactLinks}>
                <a title="LinkedIn Contact" className={styles.contactLink} href="https://www.linkedin.com/in/willakelin/">
                    <FaLinkedin />
                </a>
                <a title="Github Contact" className={styles.contactLink} href="https://github.com/willake">
                    <FaGithub />
                </a>
                <a title="Twitter Contact" className={styles.contactLink} href="https://twitter.com/WillakeLin">
                    <FaTwitter />
                </a>
            </div>
        </section>
    );
};

export default Contact;