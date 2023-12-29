import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '3rem',
  height: '40vh',
  backgroundColor: '$gray_100',
})

export const Title = styled('h1', {
  fontSize: '$2xl',
  margin: '3rem 0',
})

export const CardsList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem',
  paddingBottom: '3rem',

  '@media (max-width: 1080px)': {
    gridTemplateColumns: '1fr',
  },
})
