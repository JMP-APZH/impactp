import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DairyForm from 'src/components/Dairy/DairyForm'

const CREATE_DAIRY_MUTATION = gql`
  mutation CreateDairyMutation($input: CreateDairyInput!) {
    createDairy(input: $input) {
      id
    }
  }
`

const NewDairy = () => {
  const [createDairy, { loading, error }] = useMutation(CREATE_DAIRY_MUTATION, {
    onCompleted: () => {
      toast.success('Dairy created')
      navigate(routes.dairies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createDairy({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Dairy</h2>
      </header>
      <div className="rw-segment-main">
        <DairyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDairy
