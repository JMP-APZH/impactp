import { Link, routes } from '@redwoodjs/router'

import Dairies from 'src/components/Dairy/Dairies'

export const QUERY = gql`
  query FindDairies {
    dairies {
      id
      nom
      prix
      url
      prixspecial
      img
      quantite
      quantite2
      prixunite
      nutriscore
      nutrifull
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No dairies yet. '}
      <Link to={routes.newDairy()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dairies }) => {
  return <Dairies dairies={dairies} />
}
