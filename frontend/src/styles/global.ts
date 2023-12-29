import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, buton': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },
})
