import styles from '../../styles/About.module.scss';
import React from 'react';

type Props = {
    role: string,
    title: string,
    period: string,
    details: string[]
}


const ProjectExperienceItem: React.FC<Props> = ({ role, title, period, details }) => {

    return (
        <div className={styles.experienceCategoryItem}>
            <div className={styles.experienceCategoryItemTitle}>{role}</div>
            <div className={styles.experienceCategoryItemSubtitle}>{`${title}, ${period}`}</div>
            <div className={styles.experienceCategoryItemDetail}>
                {
                    details.map(detail => (
                      <span>
                        - {detail}<br />
                      </span>  
                    ))
                }
            </div>
        </div>
    );
};

export default ProjectExperienceItem;