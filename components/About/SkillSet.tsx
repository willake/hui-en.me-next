import styles from '../../styles/About.module.scss';
import React from 'react';
import classNames from 'classnames';

type Props = {
  title: string;
  skills: string[];
};

const SkillSet: React.FC<Props> = ({ title, skills }) => {
  return (
    <div className={styles.skillCategory}>
      <h2 className={styles.skillCategoryTitle}>
        <span className={classNames('xl', 'colorBlack')}>{title}</span>
      </h2>
      <div className={styles.skillCategoryContent}>
        {skills.map((skill) => (
          <div key={skill} className={styles.skillCategoryContentItem}>
            <span className={classNames('l', 'colorWhite')}>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
