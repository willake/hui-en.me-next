import styles from '../../styles/About.module.scss';
import React from 'react';
import SkillSet from './SkillSet';
import classNames from 'classnames';

type SkillProps = {
    programmingSkill: string[],
    framework: string[],
    knowledge: string[]
}

const Skill: React.FC<SkillProps> = ({programmingSkill, framework, knowledge}) => {

    return (
    <section className={styles.skill}>
        <SkillSet title={"Programming Skills"} skills={programmingSkill} />
        <SkillSet title="Software / Framework" skills={framework} />
        <SkillSet title="Collaboration / Knowledge" skills={knowledge} />
    </section>
    );
};

export default Skill;