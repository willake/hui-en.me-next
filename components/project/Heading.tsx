import classNames from 'classnames';
import React from 'react';
import styles from '../../styles/project.module.scss';

type Props = {
  level: number;
};

const Heading: React.FC<Props> = ({ level, children }) => {
  let content = <span className={'colorGreen'}>{children}</span>;

  switch (level) {
    case 1:
      return (
        <h1 className={classNames('xxl', styles.contentTitle)}>{content}</h1>
      );
    case 2:
      return (
        <h2 className={classNames('xl', styles.contentTitle)}>{content}</h2>
      );
    case 3:
      return (
        <h3 className={classNames('l', styles.contentTitle)}>{content}</h3>
      );
    default:
      return (
        <h1 className={classNames('xl', styles.contentTitle)}>{content}</h1>
      );
  }
};

export default Heading;
