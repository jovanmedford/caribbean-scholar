import React from "react"
import { useState } from "react"
import { Input } from "./Input"
import { validate } from "./validate"

/**
 * Set up state management and validation for a form component
 *
 * @param {Array} formConfig
 * @return {Object} state -
 * state handleSubmit, renderInputs
 */

export const useForm = formConfig => {
  //Initialize state
  const initialState = { errors: {}, isRetry: false }
  for (const config of formConfig) {
    initialState[config.name] = ""
    initialState["errors"][config.name] = ""
  }
  const [state, setState] = useState(initialState)
  //handleChange
  const handleChange = (e, validationRules) => {
    let errorMessage = ""
    const target = e.target
    const name = target.name
    const value = target.value
    errorMessage = validate(validationRules, value)
    setState({
      ...state,
      [name]: value,
      errors: {
        ...state["errors"],
        [name]: errorMessage,
      },
    })
  }

  const FormInputs = formConfig.map(config => (
    <p>
      <Input
        key={config.name || ""}
        name={config.name || ""}
        type={config.type || ""}
        label={config.label || ""}
        placeholder={config.placeholder || ""}
        options={config.options || []}
        value={state[config.name]}
        errorMessage={state["errors"][config.name]}
        handleChange={e => handleChange(e, config.validationRules)}
      />
    </p>
  ))
  return [state, FormInputs]
}
