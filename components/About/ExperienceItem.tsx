import React from 'react';
import { Box, Text, VFlex } from 'styles/Common';
import { WHITE } from 'styles/color';

type Props = {
  title: string;
  subtitle: string;
  details: string[];
};

const ExperienceItem: React.FC<Props> = ({ title, subtitle, details }) => {
  return (
    <VFlex css={{ width: '100%', margin: '10px 20px', backgroundColor: WHITE }}>
      <Text
        size={'xl'}
        textColor={'black'}
        css={{ margin: '10px', letterSpacing: '0.5px' }}
      >
        {title}
      </Text>
      <Text
        size={'m'}
        textColor={'green'}
        css={{
          margin: '5px 5px 10px 10px',
          fontWeight: 700,
          letterSpacing: '0.5px',
        }}
      >
        {subtitle}
      </Text>
      <Box css={{ margin: '5px 5px 5px 10px' }}>
        {details.map((detail) => (
          <Text
            key={detail.length}
            size={'m'}
            textColor={'black'}
            css={{ letterSpacing: '0.5px', lineHeight: 1.7 }}
          >
            - {detail}
            <br />
          </Text>
        ))}
      </Box>
    </VFlex>
  );
};

export default ExperienceItem;
