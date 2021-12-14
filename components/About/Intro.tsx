import styles from '../../styles/About.module.scss';
import React from 'react';

type IntroProps = {
    intro: string[]
}

const Intro: React.FC<IntroProps> = ({intro}) => {

    return (
        <section className={styles.aboutMe}>
            <div className={styles.aboutMeAvatar}>
            </div>
            <div className={styles.aboutMeContent}>
                {intro.map((text) => (
                    <div key={text.length} className={styles.aboutMeContentItem}>{text}</div>
                ))}
            </div>
        </section>
    );
};

export default Intro;