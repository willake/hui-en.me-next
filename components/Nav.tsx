import Image from 'next/image';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import Menu from './Nav/Menu';
import { styled } from 'styles';
import { Box, H1, HoverableBox } from 'styles/Common';
import textStyles from 'styles/text';
import { textColors } from 'styles/color';

const Nav: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  let menu = isOpen ? <Menu isOpen={isOpen} closeMenu={closeMenu} /> : <></>;

  return (
    <NavBox>
      <HoverableBox css={{ width: '64px', height: '64px' }}>
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" layout="fill" />
        </Link>
      </HoverableBox>
      <H1 textColor={'white'} size={'xl'}>
        Hui En Lin
      </H1>
      <Box
        css={{
          marginLeft: 'auto',
          marginRight: '10px',
          '@lg': { display: 'none' },
        }}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </Box>
      <Box
        css={{
          display: 'none',
          marginLeft: 'auto',
          '@lg': { display: 'block' },
        }}
      >
        <List>
          <ListItem>
            <Link href="/" size={'xl'} textColor={'white'}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/about" size={'xl'} textColor={'white'}>
              About Me
            </Link>
          </ListItem>
        </List>
      </Box>
      {menu}
    </NavBox>
  );
};

export default Nav;

const NavBox = styled('nav', {
  position: 'fixed',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexWrap: 'nowrap',
  backgroundColor: '#70a9a1',
  zIndex: 800,
  '@lg': {
    height: '70px',
  },
});

const List = styled('ul', {
  display: 'flex',
  flexWrap: 'nowrap',
});

const ListItem = styled('li', {
  transition: '.2s ease-in',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  listStyle: 'none',
  margin: '0px 30px',
});

const Link = styled('a', {
  variants: {
    size: textStyles,
    textColor: textColors,
  },
});
