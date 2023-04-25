import React from 'react';
import ExperienceCategory from './ExperienceCategory';
import { Experience, Education } from '../../schema';
import EducationCategory from './EducationCategory';
import { Section } from 'styles/Common';
import { DARK_GRAY } from 'styles/color';

type ExperienceProps = {
  workExperiences: Experience[];
  projectExperiences: Experience[];
  educations: Education[];
};

const Experience: React.FC<ExperienceProps> = ({
  workExperiences,
  projectExperiences,
  educations,
}) => {
  return (
    <Section
      css={{
        width: '100%',
        backgroundColor: DARK_GRAY,
        alignItems: 'center',
        marginTop: '10px',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <ExperienceCategory
        title="Work Experience"
        experiences={workExperiences}
      />
      <ExperienceCategory
        title="Project Experience"
        experiences={projectExperiences}
      />
      <EducationCategory title="Education" educations={educations} />
    </Section>
  );
};

export default Experience;
