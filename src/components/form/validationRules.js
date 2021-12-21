const createValidationRule = (message, validate) => {
  return {
    message: message,
    validate: validate,
  }
}

export const hasValue = value => !(value === "")

export const isDateValid = stringDate => {
  const date = new Date(stringDate)
  const now = new Date()
  return date - now > 0
}

export const isRequired = createValidationRule(
  "This Field is required",
  hasValue
)

//----Create Validation Rules----//
export const requiredRule = createValidationRule(
  "This Field is required",
  hasValue
)
export const dateRule = createValidationRule("Date has passed", isDateValid)
