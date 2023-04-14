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
    <VFlex css={{ width: '100%', margin: '10px 20px', backgroundColor: WHITE }}>
      <Text
        size={'xl'}
        textColor={'black'}
        css={{ margin: '10px', letterSpacing: '0.5px' }}
      >
        {degree}
      </Text>
      <Text
        size={'m'}
        textColor={'black'}
        css={{
          margin: '5px 5px 5px 10px',
          letterSpacing: '0.5px',
          lineHeight: 1.7,
        }}
      >
        {`${school}, ${period}`}
      </Text>
    </VFlex>
  );
};

export default EducationItem;
