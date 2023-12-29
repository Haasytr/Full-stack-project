import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { SearchBar } from './'

describe('SearchBar component', () => {
  it('renders the SearchBar component and triggers onQueryChange correctly', () => {
    const mockOnQueryChange = jest.fn()

    render(<SearchBar onQueryChange={mockOnQueryChange} />)

    const searchBarElement = screen.getByPlaceholderText(
      'What are you looking for?',
    )
    expect(searchBarElement).toBeInTheDocument()

    fireEvent.change(searchBarElement, { target: { value: 'test query' } })

    expect(mockOnQueryChange).toHaveBeenCalledWith('test query')
  })
})
