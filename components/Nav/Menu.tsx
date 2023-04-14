import styles from '../../styles/Nav.module.scss';
import React from 'react';
import classNames from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';
import { VFlex } from 'styles/Common';
import { styled } from 'styles';
import { GREEN, textColors } from 'styles/color';
import textStyles from 'styles/text';

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

const Menu: React.FC<Props> = ({ isOpen, closeMenu }) => {
  return (
    <>
      <Dim onClick={closeMenu} className={styles.dim}></Dim>
      <VFlex
        css={{
          position: 'absolute',
          width: '50vw',
          height: '100vh',
          top: 0,
          right: 0,
          backgroundColor: GREEN,
        }}
      >
        <div className={styles.menuHeader}>
          <div
            onClick={closeMenu}
            className={classNames(styles.closeButton, 'colorWhite')}
          >
            <AiOutlineClose size={46} />
          </div>
        </div>
        <List>
          <ListItem>
            <Link href="/" onClick={closeMenu} size={'xl'} textColor={'white'}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/about"
              onClick={closeMenu}
              size={'xl'}
              textColor={'white'}
            >
              About
            </Link>
          </ListItem>
        </List>
      </VFlex>
    </>
  );
};

export default Menu;

const Dim = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
});

const ListItem = styled('li', {
  listStyleType: 'none',
  margin: '15px 0px',
});

const Link = styled('a', {
  textAlign: 'left',
  variants: {
    size: textStyles,
    textColor: textColors,
  },
});
