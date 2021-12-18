import styles from '../../styles/About.module.scss';
import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

type IntroProps = {
    intro: string[]
}

const Intro: React.FC<IntroProps> = ({intro}) => {

    return (
        <section id="intro" className={styles.intro}>
            <div>
                <div className={styles.introAvatar}>
                    <Image src='/images/about/me.jpg' alt="me" layout="fill" objectFit="contain"/>
                </div>
            </div>
            <div className={styles.introTexts}>
                {intro.map((text) => (
                    <div key={text.length} className={styles.introText}>
                        <span className={classNames('m', 'colorBlack')}>{text}</span>
                    </div>
                ))}
            </div>
            <div className={classNames(styles.cvButton, 'hoverable')}>
                <a href="/cv.pdf">
                    <span className={classNames('l', 'colorWhite')}>CV PDF</span>
                </a>
            </div>
        </section>
    );
};

export default Intro;