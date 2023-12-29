import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Container } from './styles'

interface searchBarProps {
  onQueryChange: (query: string) => void
}

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export const SearchBar: React.FC<searchBarProps> = ({ onQueryChange }) => {
  const { register } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  return (
    <Container
      placeholder="What are you looking for?"
      {...register('query')}
      onChange={(e) => {
        onQueryChange(e.target.value)
      }}
    />
  )
}
