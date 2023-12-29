import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',

      gray_100: '#f7f7f8',
      gray_300: '#d3d3d3',
      gray_500: '#4b5563',

      orange_600: '#F97316',
    },
    fontSizes: {
      sm: '1.015rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2.25rem',
    },
  },
  media: {
    '@bp1': '(min-width: 768px)',
  },
})
