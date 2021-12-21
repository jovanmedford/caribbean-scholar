/**
 * loop over validation rules and return error message if one fails
 * @param {Array} validationRules - Each element is an object with an error message and validation function
 * @param {String} value - Form input
 */
export const validate = (validationRules, value) => {
  for (const rule of validationRules) {
    if (!rule.validate(value)) {
      return rule.message
    }
  }
  return ""
}
