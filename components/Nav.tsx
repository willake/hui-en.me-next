import Image from 'next/image';
import { Squash as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import Link from 'next/link';
import Menu from './Nav/Menu';
import classNames from 'classnames';
import { styled } from 'styles';
import { Box, Flex, H1, HoverableBox } from 'styles/Common';

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
          <a>
            <Image src="/images/logo.svg" alt="logo" layout="fill" />
          </a>
        </Link>
      </HoverableBox>
      <Box>
        <H1 textColor={'white'} size={'xl'}>
          Hui En Li
        </H1>
      </Box>
      <Box css={{ marginLeft: 'auto', marginRight: '10px' }}>
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
          <ListItem className={'hoverable'}>
            <Link href="/">
              <a className={classNames('xl', 'colorWhite')}>Home</a>
            </Link>
          </ListItem>
          <ListItem className={'hoverable'}>
            <Link href="/about">
              <a className={classNames('xl', 'colorWhite')}>About Me</a>
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
  listStyle: 'none',
  margin: '0px 30px',
});
