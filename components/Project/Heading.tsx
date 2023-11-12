import React from 'react';
import { H1, H2, H3 } from 'styles/Common';

type Props = {
  level: number;
};

const Heading: React.FC<Props> = ({ level, children }) => {
  const titleStyle = {
    fontWeight: 600,
    marginTop: '30px',
    marginBottom: '10px',
  };
  switch (level) {
    case 1:
      return (
        <H1 size={'xxl'} textColor={'green'} css={titleStyle}>
          {children}
        </H1>
      );
    case 2:
      return (
        <H2 size={'xl'} textColor={'green'} css={titleStyle}>
          {children}
        </H2>
      );
    case 3:
      return (
        <H3 size={'l'} textColor={'green'} css={titleStyle}>
          {children}
        </H3>
      );
    default:
      return (
        <H1 size={'xxl'} textColor={'green'} css={titleStyle}>
          {children}
        </H1>
      );
  }
};

export default Heading;
