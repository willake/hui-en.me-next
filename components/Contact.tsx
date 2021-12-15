import styles from '../styles/Contact.module.scss';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from 'react';
import classNames from 'classnames';

const Contact: React.FC = () => {

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactButton}>
                <a title="Email Contact" className={styles.contactButtonLink} href="mailto:willakelin@gmail.com">
                    <span className={classNames('l', 'colorWhite')}>Contact me</span>
                </a>
            </div>
            <div className={styles.contactEmail}>willakelin@gmail.com</div>
            <div className={styles.contactLinks}>
                <a title="LinkedIn Contact" className={styles.contactLink} href="https://www.linkedin.com/in/willakelin/">
                    <FaLinkedin size={32}/>
                </a>
                <a title="Github Contact" className={styles.contactLink} href="https://github.com/willake">
                    <FaGithub size={32}/>
                </a>
                <a title="Twitter Contact" className={styles.contactLink} href="https://twitter.com/WillakeLin">
                    <FaTwitter size={32}/>
                </a>
            </div>
        </section>
    );
};

export default Contact;