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

export const Text = styled('div', {
  variants: {
    size: textStyles,
    textColor: textColors,
  },
});

export const TextSpan = styled('span', {
  variants: {
    size: textStyles,
    textColor: textColors,
  },
});

export const Button = styled('a', {
  cursor: 'pointer',
  padding: '0 15px',
  display: 'box',
  placeItems: 'center',
  transition: '.2s ease-in',
  userSelect: 'none',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});
