import React from 'react';
import styles from '../../styles/project.module.scss';
import { Section } from 'styles/Common';

const Content: React.FC = ({ children }) => {
  return (
    <Section
      className={styles.content}
      css={{
        padding: '0px 30px',
        '@lg': { width: '1000px' },
      }}
    >
      {children}
    </Section>
  );
};

export default Content;
