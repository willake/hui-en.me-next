import * as Stitches from '@stitches/react';

export const { styled, getCssText, keyframes } = Stitches.createStitches({
  theme: {},
  utils: {
    w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
    h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    bc: (
      value:
        | Stitches.PropertyValue<'backgroundColor'>
        | Stitches.ScaleValue<'colors'>
    ) => ({ backgroundColor: value }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
  },
});
