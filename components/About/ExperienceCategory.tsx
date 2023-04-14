import React from 'react';
import { Experience } from '../../schema';
import ExperienceItem from './ExperienceItem';
import { H2, VFlexCenter } from 'styles/Common';

type Props = {
  title: string;
  experiences: Experience[];
};

const ExperienceCategory: React.FC<Props> = ({ title, experiences }) => {
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
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.title}
            title={experience.title}
            subtitle={experience.subtitle}
            details={experience.details}
          />
        ))}
      </VFlexCenter>
    </VFlexCenter>
  );
};

export default ExperienceCategory;
