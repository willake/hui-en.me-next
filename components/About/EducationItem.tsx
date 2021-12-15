import styles from '../../styles/About.module.scss';
import React from 'react';

type Props = {
    degree: string,
    school: string,
    period: string
}


const EducationItem: React.FC<Props> = ({ degree, school, period }) => {

    return (
        <div className={styles.experienceCategoryContentItem}>
            <div className={styles.experienceCategoryContentItemTitle}>{degree}</div>
            <div className={styles.experienceCategoryContentItemDetail}>{`${school}, ${period}`}</div>
        </div>
    );
};

export default EducationItem;