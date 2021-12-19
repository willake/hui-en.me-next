import styles from '../styles/Contact.module.scss';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from 'react';
import classNames from 'classnames';

const Contact: React.FC = () => {

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactButton}>
                <a title="Email Contact" className={styles.contactButtonLink} href="mailto:willakelin@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span className={classNames('l', 'colorWhite')}>Contact me</span>
                </a>
            </div>
            <div className={styles.contactEmail}>
                <span className={classNames('l', 'colorBlack')}>
                    willakelin@gmail.com
                </span>
            </div>
            <div className={styles.contactLinks}>
                <a title="LinkedIn Contact" className={styles.contactLink} href="https://www.linkedin.com/in/willakelin/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32}/>
                </a>
                <a title="Github Contact" className={styles.contactLink} href="https://github.com/willake" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32}/>
                </a>
                <a title="Twitter Contact" className={styles.contactLink} href="https://twitter.com/WillakeLin" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={32}/>
                </a>
            </div>
        </section>
    );
};

export default Contact;