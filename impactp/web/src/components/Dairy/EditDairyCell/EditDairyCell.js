import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DairyForm from 'src/components/Dairy/DairyForm'

export const QUERY = gql`
  query EditDairyById($id: Int!) {
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
const UPDATE_DAIRY_MUTATION = gql`
  mutation UpdateDairyMutation($id: Int!, $input: UpdateDairyInput!) {
    updateDairy(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dairy }) => {
  const [updateDairy, { loading, error }] = useMutation(UPDATE_DAIRY_MUTATION, {
    onCompleted: () => {
      toast.success('Dairy updated')
      navigate(routes.dairies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateDairy({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Dairy {dairy?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DairyForm
          dairy={dairy}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
