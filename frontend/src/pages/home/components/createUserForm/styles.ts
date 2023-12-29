import { styled } from '@stitches/react'

export const Container = styled('div', {
  margin: '3rem',
  height: '40vh',
})

export const Title = styled('h1', {
  fontSize: '$2xl',
  margin: '3rem 0',
})

export const Button = styled('button', {
  all: 'unset',

  cursor: 'pointer',

  color: '$white',
  background: '$orange_600',

  padding: '1rem 2rem',
  borderRadius: 5,
  margin: '3rem 0',
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
})
