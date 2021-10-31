import React from "react"
import { useForm } from "./useForm"

export const Form = ({ formConfig }) => {
  const FormInputs = useForm(formConfig)
  return <form>{FormInputs}</form>
}
