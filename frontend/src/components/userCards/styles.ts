import { styled } from '@stitches/react'

export const Container = styled('div', {
  color: '$white',
  backgroundColor: '$gray_500',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  transition: '0.2s',

  '&:hover': {
    opacity: 0.8,
  },

  '&:hover > img': {
    opacity: 0.8,
  },

  borderRadius: 5,
  '> img': {
    objectFit: 'cover',
    width: '100%',
    height: 300,
    borderRadius: 5,
  },

  [`@media (max-width: 1080px)`]: {
    padding: '0',
  },
})

export const CardTitle = styled('h2', {
  width: '100%',
  fontSize: '$lg',
  textTransform: 'uppercase',
  textAlign: 'center',
  borderBottom: '2px solid $gray_300',
  padding: '1rem 0',
})

export const CategoryTitle = styled('span', {
  fontSize: '$lg',
  color: '$orange_600',
  textTransform: 'uppercase',
})

export const Description = styled('ul', {
  padding: '1rem 0',
  display: 'grid',
  gridTemplateColumns: '1fr',

  '> li': {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    listStyleType: 'none',
    fontSize: '$md',
    margin: '1rem 0',
  },
  '> h3': {
    color: '$orange_400',
    margin: '0.5rem 0',
  },
})
