import { styled } from '@stitches/react'

export const Container = styled('header', {
  background: '$black',
  color: '$white',

  '> h1': {
    padding: '2rem',

    [`@media (max-width: 1080px)`]: {
      textAlign: 'center',
    },
  },
})
