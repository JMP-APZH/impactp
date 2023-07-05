import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Dairy/DairiesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_DAIRY_MUTATION = gql`
  mutation DeleteDairyMutation($id: Int!) {
    deleteDairy(id: $id) {
      id
    }
  }
`

const DairiesList = ({ dairies }) => {
  const [deleteDairy] = useMutation(DELETE_DAIRY_MUTATION, {
    onCompleted: () => {
      toast.success('Dairy deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dairy ' + id + '?')) {
      deleteDairy({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Url</th>
            <th>Prixspecial</th>
            <th>Img</th>
            <th>Quantite</th>
            <th>Quantite2</th>
            <th>Prixunite</th>
            <th>Nutriscore</th>
            <th>Nutrifull</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {dairies.map((dairy) => (
            <tr key={dairy.id}>
              <td>{truncate(dairy.id)}</td>
              <td>{truncate(dairy.nom)}</td>
              <td>{truncate(dairy.prix)}</td>
              <td>{truncate(dairy.url)}</td>
              <td>{truncate(dairy.prixspecial)}</td>
              <td>{truncate(dairy.img)}</td>
              <td>{truncate(dairy.quantite)}</td>
              <td>{truncate(dairy.quantite2)}</td>
              <td>{truncate(dairy.prixunite)}</td>
              <td>{truncate(dairy.nutriscore)}</td>
              <td>{truncate(dairy.nutrifull)}</td>
              <td>{timeTag(dairy.createdAt)}</td>
              <td>{timeTag(dairy.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.dairy({ id: dairy.id })}
                    title={'Show dairy ' + dairy.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDairy({ id: dairy.id })}
                    title={'Edit dairy ' + dairy.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete dairy ' + dairy.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(dairy.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DairiesList
