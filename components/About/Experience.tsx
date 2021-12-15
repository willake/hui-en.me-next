import styles from '../../styles/About.module.scss';
import React from 'react';
import classNames from 'classnames';
import ExperienceCategory from './ExperienceCategory';
import EducationItem from './EducationItem';
import { Experience, Education } from '../../schema';
import EducationCategory from './EducationCategory';

type ExperienceProps = {
    workExperiences: Experience[],
    projectExperiences: Experience[],
    educations: Education[]
}


const Experience: React.FC<ExperienceProps> = ({ workExperiences, projectExperiences, educations}) => {

    return (
        <section className={styles.experience}>
            <ExperienceCategory 
                title="Work Experience"
                experiences={workExperiences}
            />
            <ExperienceCategory 
                title="Project Experience"
                experiences={projectExperiences}
            />
            <EducationCategory
                title="Education"
                educations={educations}
            />
        </section>
    );
};

export default Experience;