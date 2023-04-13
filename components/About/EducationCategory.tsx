import styles from '../../styles/About.module.scss';
import React from 'react';
import { Education } from '../../schema';
import EducationItem from './EducationItem';
import classNames from 'classnames';

type Props = {
  title: string;
  educations: Education[];
};

const EducationCategory: React.FC<Props> = ({ title, educations }) => {
  return (
    <div className={styles.experienceCategory}>
      <h2 className={styles.experienceCategoryTitle}>
        <span className={classNames('xl', 'colorBlack')}>{title}</span>
      </h2>
      <div className={styles.experienceCategoryContent}>
        {educations.map((education) => (
          <EducationItem
            key={education.degree}
            degree={education.degree}
            school={education.school}
            period={education.period}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationCategory;
