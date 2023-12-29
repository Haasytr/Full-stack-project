// UserCard.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserCard from './'

describe('UserCard component', () => {
  const mockUser = {
    name: 'John Doe',
    city: 'Cityville',
    country: 'Countryland',
    favoriteSport: 'Football',
  }

  beforeEach(() => {
    render(
      <UserCard
        city={mockUser.city}
        country={mockUser.country}
        name={mockUser.name}
        favoriteSport={mockUser.favoriteSport}
      />,
    )
  })

  it('renders the UserCard component with user data', () => {
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
    expect(screen.getByText(/Countryland/i)).toBeInTheDocument()
    expect(screen.getByText(/Cityville/i)).toBeInTheDocument()
    expect(screen.getByText(/Football/i)).toBeInTheDocument()
  })
})
