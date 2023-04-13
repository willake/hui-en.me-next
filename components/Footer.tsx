import styles from '../styles/Footer.module.scss';
import React from 'react';
import classNames from 'classnames';
import { styled } from 'styles';
import { H2, VFlex } from 'styles/Common';
import { DARK_GREEN } from 'styles/color';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <FooterBox>
      <H2
        css={{ fontWeight: 500, margin: '20px' }}
        size={'m'}
        textColor={'white'}
      >
        Copyright © Hui En Lin, 2016 - {year}
      </H2>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled(VFlex, {
  backgroundColor: DARK_GREEN,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});
