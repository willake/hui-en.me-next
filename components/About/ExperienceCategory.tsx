import styles from '../../styles/About.module.scss';
import React from 'react';
import { Experience } from '../../schema';
import ExperienceItem from './ExperienceItem';
import classNames from 'classnames';

type Props = {
    title: string,
    experiences: Experience[]
}


const ExperienceCategory: React.FC<Props> = ({ title, experiences }) => {

    return (
        <div className={styles.experienceCategory}>
            <h2 className={styles.experienceCategoryTitle}>
                <span className={classNames('xl', 'colorBlack')}>{title}</span>
            </h2>
            <div className={styles.experienceCategoryContent}>
            {experiences.map((experience) => (
                <ExperienceItem 
                    key={experience.title}
                    title={experience.title}
                    subtitle={experience.subtitle}
                    details={experience.details} />
            ))}
            </div>
        </div>
    );
};

export default ExperienceCategory;