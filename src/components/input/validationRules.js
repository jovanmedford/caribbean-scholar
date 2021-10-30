const createValidationRule = (message, validate) => {
  return {
    message: message,
    validate: validate,
  }
}
// Returns true if date has not passed
export const isDateValid = stringDate => {
  const date = new Date(stringDate)
  const now = new Date()
  return date - now > 0
}

export const dateRule = createValidationRule("Date has passed", isDateValid)
