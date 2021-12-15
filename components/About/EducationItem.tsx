import styles from '../../styles/About.module.scss';
import React from 'react';
import classNames from 'classnames';

type Props = {
    degree: string,
    school: string,
    period: string
}


const EducationItem: React.FC<Props> = ({ degree, school, period }) => {

    return (
        <div id={degree} className={styles.experienceCategoryContentItem}>
            <div className={styles.experienceCategoryContentItemTitle}>
                <span className={classNames('l', 'colorBlack')}>{degree}</span>
            </div>
            <div className={styles.experienceCategoryContentItemDetail}>
                <span className={classNames('s', 'colorBlack')}>{`${school}, ${period}`}</span>
            </div>
        </div>
    );
};

export default EducationItem;