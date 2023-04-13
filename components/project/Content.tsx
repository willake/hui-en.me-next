import React from 'react';
import styles from '../../styles/project.module.scss';

const Content: React.FC = ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};

export default Content;
