import styles from '../../styles/About.module.scss';
import React from 'react';
import SkillSet from './SkillSet';

type SkillProps = {
    programmingSkill: string[],
    framework: string[],
    knowledge: string[]
}

const Skill: React.FC<SkillProps> = ({programmingSkill, framework, knowledge}) => {

    return (
    <section className={styles.skill}>
        <div className={styles.skillCategory}>
            <h2 className={styles.skillCategoryTitle}>Programming Skills</h2>
            <SkillSet skills={programmingSkill} />
        </div>
        <div className={styles.skillCategory}>
            <h2 className={styles.skillCategoryTitle}>Software / Framework</h2>
            <SkillSet skills={framework} />
        </div>
        <div className={styles.skillCategory}>
            <h2 className={styles.skillCategoryTitle}>Collaboration / Knowledge</h2>
            <SkillSet skills={knowledge} />
        </div>
    </section>
    );
};

export default Skill;