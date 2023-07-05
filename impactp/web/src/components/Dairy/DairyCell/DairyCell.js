import Dairy from 'src/components/Dairy/Dairy'

export const QUERY = gql`
  query FindDairyById($id: Int!) {
    dairy: dairy(id: $id) {
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

export const Empty = () => <div>Dairy not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dairy }) => {
  return <Dairy dairy={dairy} />
}
