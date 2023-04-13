import styles from '../../styles/About.module.scss';
import React from 'react';
import classNames from 'classnames';
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
      <Box css={{ margin: '10px' }}>
        <Text size={'xl'} textColor={'black'} css={{ letterSpacing: '0.5px' }}>
          {title}
        </Text>
      </Box>
      <Box css={{ margin: '5px 5px 10px 10px' }}>
        <Text
          size={'m'}
          textColor={'green'}
          css={{ fontWeight: 700, letterSpacing: '0.5px' }}
        >
          {subtitle}
        </Text>
      </Box>
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
