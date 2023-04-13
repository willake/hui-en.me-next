import styles from '../styles/Layout.module.scss';
import React from 'react';
import Footer from './Footer';
import Contact from './Contact';
import Nav from './Nav';
import { Box, VFlex } from 'styles/Common';
import { styled } from 'styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <VFlex
        css={{
          minHeight: '100vh',
          padding: '0 0',
          paddingTop: '70px',
          // flexDirection: column,
          // justifyContent: flexStart,
          // alignItems: center,
        }}
      >
        <Main>{children}</Main>
        <Contact />
      </VFlex>
      <Footer />
    </>
  );
  0;
};

export default Layout;

const Main = styled('main', {
  width: '100%',
  // flex: '1',
  display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'flex-start',
  // alignItems: 'center'
});
