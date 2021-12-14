import styles from '../../styles/About.module.scss';
import React from 'react';
import classNames from 'classnames';
import WorkExperienceItem from './WorkExperienceItem';
import ProjectExperienceItem from './ProjectExperienceItem';
import EducationItem from './EducationItem';
import { WorkExperience, ProjectExperience, Education } from '../../schema';

type ExperienceProps = {
    workExperiences: WorkExperience[],
    projectExperiences: ProjectExperience[],
    educations: Education[]
}


const Experience: React.FC<ExperienceProps> = ({ workExperiences, projectExperiences, educations}) => {

    return (
        <section className={styles.sectionExperience}>
            <div className={classNames(styles.experienceCategory, styles.workExperience)}>
                <h2 className={styles.experienceCategoryTitle}>Work Experience</h2>
                <div className={styles.experienceCategoryContent}>
                {workExperiences.map((experience) => (
                    <WorkExperienceItem
                        title={experience.title}
                        location={experience.location}
                        period={experience.period}
                        details={experience.details}
                    />
                ))}
                </div>
            </div>
            <div className={classNames(styles.experienceCategory, styles.projectExperience)}>
                <h2 className={styles.experienceCategoryTitle}>Project Experience</h2>
                <div className={styles.experienceCategoryContent}>
                    {projectExperiences.map((experience) => (
                        <ProjectExperienceItem
                            role={experience.role}
                            title={experience.title}
                            period={experience.period}
                            details={experience.details}
                        />
                    ))}
                </div>
            </div>
            <div className={classNames(styles.experienceCategory, styles.projectExperience)}>
            <h2 className={styles.experienceCategoryTitle}>Education</h2>
                <div className={styles.experienceCategoryContent}>
                    {educations.map((education) => (
                        <EducationItem
                            degree={education.degree}
                            school={education.school}
                            period={education.period}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;