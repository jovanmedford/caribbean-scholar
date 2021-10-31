import { validate } from "./validate"
import { requiredRule } from "./validationRules"

describe("validate function", () => {
  test("no rules, no input", () => {
    expect(validate([], "")).toBe("")
  })

  test("Required rule but no input", () => {
    expect(validate([requiredRule], "")).toBe(requiredRule.message)
  })

  test("Required rule with input", () => {
    expect(validate([requiredRule], "I have input")).toBe("")
  })
})
