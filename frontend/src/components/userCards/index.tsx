import { CardTitle, CategoryTitle, Container, Description } from './styles'

interface userProps {
  name: string
  city: string
  country: string
  favoriteSport: string
}

export default function UserCard({
  city,
  country,
  favoriteSport,
  name,
}: userProps) {
  return (
    <Container>
      <CardTitle>{name}</CardTitle>

      <Description>
        <li>
          <CategoryTitle>Country</CategoryTitle>
          {country}
        </li>
        <li>
          <CategoryTitle>City</CategoryTitle>
          {city}
        </li>
        <li>
          <CategoryTitle>Favorite Sport</CategoryTitle>
          {favoriteSport}
        </li>
      </Description>
    </Container>
  )
}
