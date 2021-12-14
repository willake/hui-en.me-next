import styles from '../../styles/About.module.scss';
import React from 'react';

type Props = {
    degree: string,
    school: string,
    period: string
}


const EducationItem: React.FC<Props> = ({ degree, school, period }) => {

    return (
        <div className={styles.experienceCategoryItem}>
            <div className={styles.experienceCategoryTitle}>{degree}</div>
            <div className={styles.experienceCategoryDetail}>{`${school}, ${period}`}</div>
        </div>
    );
};

export default EducationItem;