import React from "react"
import { useForm } from "./useForm"

export const Form = ({ formConfig }) => {
  const [handleSubmit, FormInputs] = useForm(formConfig)

  const submitForm = state => {
    console.log(state)
  }

  return <form onSubmit={e => handleSubmit(e, submitForm)}>{FormInputs}</form>
}
