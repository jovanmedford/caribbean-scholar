/** @jsx jsx */
import { jsx } from "theme-ui"
import { useForm } from "../form/useForm"

export const NewExamForm = ({ formConfig }) => {
  const [handleSubmit, FormInputs] = useForm(formConfig)

  const submitForm = state => {
    console.log(state)
  }

  return (
    <form sx={formStyle} onSubmit={e => handleSubmit(e, submitForm)}>
      {FormInputs}
      <button>Submit</button>
    </form>
  )
}

const formStyle = {
  width: "90%",
  margin: "0 auto",
  label: {
    fonrSize: 1,
  },
  p: {
    marginBottom: "0.5rem",
    border: "none",
  },
}
