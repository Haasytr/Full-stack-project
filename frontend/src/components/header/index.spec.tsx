import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Header } from './'

describe('Header component', () => {
  it('renders the Header component with the correct title', () => {
    render(<Header />)

    const containerElement = screen.getByTestId('header-container')
    expect(containerElement).toBeInTheDocument()

    const titleElement = screen.getByText('Partner')
    expect(titleElement).toBeInTheDocument()
  })
})
