import { styled } from 'styles';
import textStyles from './text';
import { textColors } from './color';

export const Box = styled('div', {});

export const HoverableBox = styled(Box, {
  cursor: 'pointer',
  transform: 'scale(1)',
  transition: '0.2s ease-in',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const Group = styled(Box, {
  position: 'relative',
});

export const CenterBox = styled(Box, {
  display: 'grid',
  placeItem: 'center',
});

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const VFlex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const VFlexCenter = styled(VFlex, {
  alignItems: 'center',
  justifyContent: 'center',
});

export const HFlex = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

export const HFlexCenter = styled(HFlex, {
  alignItems: 'center',
  justifyContent: 'center',
});

export const Section = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const H1 = styled('h1', {
  variants: {
    size: textStyles,
    textColor: textColors,
  },
});

export const H2 = styled('h2', {
  variants: {
    size: textStyles,
    textColor: textColors,
  },
});

export const H3 = styled('h3', {
  variants: {
    size: textStyles,
    textColor: textColors,
  },
});

export const Text = styled('span', {
  variants: {
    size: textStyles,
    textColor: textColors,
  },
});

export const Button = styled('button', {
  p: '0 15px',
  h: 42,
  display: 'grid',
  placeItems: 'center',
  br: 9,
  boxShadow: '0 6px 0 #075c49',
  transition: '100ms ease-in-out',
  '&:active': {
    boxShadow: '0 0 #075c49',
    transform: 'translateY(6px)',
  },
});
