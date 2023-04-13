import React from 'react';
import { Box, Text, VFlex } from 'styles/Common';
import { WHITE } from 'styles/color';

type Props = {
  degree: string;
  school: string;
  period: string;
};

const EducationItem: React.FC<Props> = ({ degree, school, period }) => {
  return (
    <VFlex css={{ margin: '10px 20px', backgroundColor: WHITE }}>
      <Box css={{ margin: '10px' }}>
        <Text size={'xl'} textColor={'black'} css={{ letterSpacing: '0.5px' }}>
          {degree}
        </Text>
      </Box>
      <Box css={{ margin: '5px 5px 5px 10px' }}>
        <Text
          size={'m'}
          textColor={'black'}
          css={{ letterSpacing: '0.5px', lineHeight: 1.7 }}
        >
          {`${school}, ${period}`}
        </Text>
      </Box>
    </VFlex>
  );
};

export default EducationItem;
