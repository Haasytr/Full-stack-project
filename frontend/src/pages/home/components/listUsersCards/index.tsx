import { useEffect, useState } from 'react'

import { CardsList, Container } from './styles'
import UserCard from '../../../../components/userCards'
import { api } from '../../../../lib/axios'
import { SearchBar } from '../../../../components/searchBar'

interface userProps {
  name: string
  city: string
  country: string
  favorite_sport: string
}

export function ListUsersCards() {
  const [users, setUsers] = useState<userProps[]>([])
  const [query, setQuery] = useState('')

  function handleQueryChange(query: string) {
    setQuery(query)
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await api.get(`/users?q=${query}`)
      setUsers(data.data)
    }

    fetchUsers()
  }, [query])

  return (
    <Container>
      <h1>Search for Users</h1>
      <SearchBar onQueryChange={handleQueryChange} />
      <CardsList>
        {users &&
          users.map((user) => (
            <UserCard
              name={user.name}
              city={user.city}
              country={user.country}
              favoriteSport={user.favorite_sport}
            />
          ))}
      </CardsList>
    </Container>
  )
}
