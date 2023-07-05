import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const DairyForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.dairy?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="nom"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nom
        </Label>

        <TextField
          name="nom"
          defaultValue={props.dairy?.nom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nom" className="rw-field-error" />

        <Label
          name="prix"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prix
        </Label>

        <TextField
          name="prix"
          defaultValue={props.dairy?.prix}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="prix" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.dairy?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="prixspecial"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prixspecial
        </Label>

        <TextField
          name="prixspecial"
          defaultValue={props.dairy?.prixspecial}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="prixspecial" className="rw-field-error" />

        <Label
          name="img"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Img
        </Label>

        <TextField
          name="img"
          defaultValue={props.dairy?.img}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="img" className="rw-field-error" />

        <Label
          name="quantite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantite
        </Label>

        <TextField
          name="quantite"
          defaultValue={props.dairy?.quantite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantite" className="rw-field-error" />

        <Label
          name="quantite2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantite2
        </Label>

        <TextField
          name="quantite2"
          defaultValue={props.dairy?.quantite2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantite2" className="rw-field-error" />

        <Label
          name="prixunite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prixunite
        </Label>

        <TextField
          name="prixunite"
          defaultValue={props.dairy?.prixunite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="prixunite" className="rw-field-error" />

        <Label
          name="nutriscore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nutriscore
        </Label>

        <TextField
          name="nutriscore"
          defaultValue={props.dairy?.nutriscore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nutriscore" className="rw-field-error" />

        <Label
          name="nutrifull"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nutrifull
        </Label>

        <TextField
          name="nutrifull"
          defaultValue={props.dairy?.nutrifull}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nutrifull" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DairyForm
