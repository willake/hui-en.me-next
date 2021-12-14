import styles from '../../styles/About.module.scss';
import React from 'react';

type Props = {
    skills: string[]
}

const SkillSet: React.FC<Props> = ({skills}) => {

    return (
    <div className={styles.skillCategoryContent}>
        {skills.map((skill) => (
            <div className={styles.skillCategoryItem}>
                <div className={styles.skillCategoryItemTitle}>{skill}</div>
            </div>
        ))}
    </div>
    );
};

export default SkillSet;