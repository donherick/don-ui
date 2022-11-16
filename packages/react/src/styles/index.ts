import { createStitches } from '@stitches/react';
import {
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices,
} from '@don-ui/tokens';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    borderWidths,
    colors,
    fontSizes,
    fontWeights,
    fonts,
    letterSpacings,
    lineHeights,
    radii,
    shadows,
    sizes,
    space,
    transitions,
    zIndices,
  },
});
