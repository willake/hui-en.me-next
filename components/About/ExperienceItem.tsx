import styles from '../../styles/About.module.scss';
import React from 'react';
import classNames from 'classnames';

type Props = {
    title: string,
    subtitle: string,
    details: string[]
}


const ExperienceItem: React.FC<Props> = ({ title, subtitle, details }) => {

    return (
        <div className={styles.experienceCategoryContentItem}>
            <div className={styles.experienceCategoryContentItemTitle}>
                <span className={classNames('l', 'colorBlack')}>{title}</span>
            </div>
            <div className={styles.experienceCategoryContentItemSubtitle}>
                <span className={classNames('m', 'colorGreen')}>{subtitle}</span>
            </div>
            <div className={styles.experienceCategoryContentItemDetail}>
                {
                    details.map(detail => (
                      <span key={detail.length} className={classNames('s', 'colorBlack')}>
                        - {detail}<br />
                      </span>  
                    ))
                }
            </div>
        </div>
    );
};

export default ExperienceItem;