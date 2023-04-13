import { styled } from 'styles';
import textStyles from './text';
import { textColors } from './Color';

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

export const HFlex = styled('div', {
  display: 'flex',
  flexDirection: 'row',
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
