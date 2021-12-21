import { hasValue, isDateValid } from "./validationRules"

describe("hasValue", () => {
  test("Field is empty", () => {
    expect(hasValue("")).toBeFalsy()
  })

  test("Field is not empty", () => {
    expect(hasValue("hey")).toBeTruthy()
  })
})

describe("date input", () => {
  test("Date has passed", () => {
    expect(isDateValid("2020-10-11")).toBe(false)
  })

  test("Date is valid", () => {
    expect(isDateValid("2022-10-11")).toBe(true)
  })
})
