import styles from '../../styles/About.module.scss';
import React from 'react';
import { Education } from '../../schema';
import EducationItem from './EducationItem';
import classNames from 'classnames';
import { H2, VFlexCenter } from 'styles/Common';

type Props = {
  title: string;
  educations: Education[];
};

const EducationCategory: React.FC<Props> = ({ title, educations }) => {
  return (
    <VFlexCenter
      css={{
        width: '90%',
        '@lg': {
          maxWidth: '1000px',
          flexDirection: 'row',
          alignItems: 'flex-start',
        },
      }}
    >
      <H2
        size={'xl'}
        textColor={'black'}
        css={{
          margin: '20px 0px',
          fontWeight: 400,
          '@lg': {
            flex: 1,
            textAlign: 'left',
          },
        }}
      >
        {title}
      </H2>
      <VFlexCenter css={{ width: '100%', '@lg': { flex: 2 } }}>
        {educations.map((education) => (
          <EducationItem
            key={education.degree}
            degree={education.degree}
            school={education.school}
            period={education.period}
          />
        ))}
      </VFlexCenter>
    </VFlexCenter>
  );
};

export default EducationCategory;
