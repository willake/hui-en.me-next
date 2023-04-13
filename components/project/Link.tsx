import React from 'react';
import styles from '../../styles/project.module.scss';
import classNames from 'classnames';

type Props = {
  title: string;
  href: string;
};

const Link: React.FC<Props> = ({ title, href, children }) => {
  return (
    <div className={classNames(styles.contentLink, 'hoverable')}>
      <a
        className={classNames('l', 'colorWhite')}
        title={title}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
};

export default Link;
