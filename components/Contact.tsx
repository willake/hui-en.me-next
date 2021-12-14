import styles from '../styles/Contact.module.scss';
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
                    <i className="contact__link__icon fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a title="Github Contact" className={styles.contactLink} href="https://github.com/willake">
                    <i className="contact__link__icon fa fa-github" aria-hidden="true"></i>
                </a>
                <a title="Twitter Contact" className={styles.contactLink} href="https://twitter.com/WillakeLin">
                    <i className="contact__link__icon fa fa-twitter" aria-hidden="true"></i>
                </a>
            </div>
        </section>
    );
};

export default Contact;