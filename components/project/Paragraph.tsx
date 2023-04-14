import React from 'react';
import { styled } from 'styles';
import textStyles from 'styles/text';
import { textColors } from 'styles/color';

const Paragraph: React.FC = ({ children }) => {
  return (
    <P size={'l'} textColor={'black'}>
      {children}
    </P>
  );
};

export default Paragraph;

const P = styled('p', {
  marginTop: 0,
  lineHeight: 1.5,
  variants: {
    size: textStyles,
    textColor: textColors,
  },
});
