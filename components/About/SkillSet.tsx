import React from 'react';
import { Box, H2, HFlexCenter, Text, VFlexCenter } from 'styles/Common';
import { styled } from 'styles';
import { GREEN, SHADOW } from 'styles/color';

type Props = {
  title: string;
  skills: string[];
};

const SkillSet: React.FC<Props> = ({ title, skills }) => {
  return (
    <VFlexCenter>
      <H2
        size="xl"
        textColor={'black'}
        css={{
          fontWeight: 500,
          letterSpacing: '0.5px',
        }}
      >
        {title}
      </H2>
      <HFlexCenter css={{ flexWrap: 'wrap' }}>
        {skills.map((skill) => (
          <SkillItem key={skill}>
            <Text size={'l'} textColor={'white'}>
              {skill}
            </Text>
          </SkillItem>
        ))}
      </HFlexCenter>
    </VFlexCenter>
  );
};

export default SkillSet;

const SkillItem = styled(Box, {
  width: 'auto',
  background: GREEN,
  boxShadow: `1px 1px 3px ${SHADOW}`,
  borderRadius: '5px',
  margin: '10px 10px',
  padding: '10px 10px',
});
