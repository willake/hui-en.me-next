import React from 'react';
import { Section, Text } from 'styles/Common';

type Props = {
  title: string;
};

const Banner: React.FC<Props> = ({ title }) => {
  return (
    <Section id="banner" css={{ position: 'relative', overflow: 'hidden' }}>
      <Text
        size={'xxl'}
        textColor={'black'}
        css={{
          textAlign: 'center',
          fontWeight: 500,
          letterSpacing: '0.5px',
          margin: '50px 0',
        }}
      >
        {title}
      </Text>
    </Section>
  );
};

export default Banner;
