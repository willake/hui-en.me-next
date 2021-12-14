import styles from '../../styles/About.module.scss';
import React from 'react';

type Props = {
    title: string,
    location: string,
    period: string,
    details: string[]
}


const WorkExperienceItem: React.FC<Props> = ({ title, location, period, details }) => {

    return (
        <div className={styles.experienceCategoryItem}>
            <div className={styles.experienceCategoryItemTitle}>{title}</div>
            <div className={styles.experienceCategoryItemSubtitle}>{`${location}, ${period}`}</div>
            <div className={styles.experienceCategoryItemDetail}>
                {
                    details.map(detail => (
                      <span key={detail.length}>
                        - {detail}<br />
                      </span>  
                    ))
                }
            </div>
        </div>
    );
};

export default WorkExperienceItem;