import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_DAIRY_MUTATION = gql`
  mutation DeleteDairyMutation($id: Int!) {
    deleteDairy(id: $id) {
      id
    }
  }
`

const Dairy = ({ dairy }) => {
  const [deleteDairy] = useMutation(DELETE_DAIRY_MUTATION, {
    onCompleted: () => {
      toast.success('Dairy deleted')
      navigate(routes.dairies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dairy ' + id + '?')) {
      deleteDairy({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Dairy {dairy.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{dairy.id}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{dairy.nom}</td>
            </tr>
            <tr>
              <th>Prix</th>
              <td>{dairy.prix}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{dairy.url}</td>
            </tr>
            <tr>
              <th>Prixspecial</th>
              <td>{dairy.prixspecial}</td>
            </tr>
            <tr>
              <th>Img</th>
              <td>{dairy.img}</td>
            </tr>
            <tr>
              <th>Quantite</th>
              <td>{dairy.quantite}</td>
            </tr>
            <tr>
              <th>Quantite2</th>
              <td>{dairy.quantite2}</td>
            </tr>
            <tr>
              <th>Prixunite</th>
              <td>{dairy.prixunite}</td>
            </tr>
            <tr>
              <th>Nutriscore</th>
              <td>{dairy.nutriscore}</td>
            </tr>
            <tr>
              <th>Nutrifull</th>
              <td>{dairy.nutrifull}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(dairy.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(dairy.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDairy({ id: dairy.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(dairy.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Dairy
