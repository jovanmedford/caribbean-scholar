import { isDateValid } from "./validationRules"

describe("date input", () => {
  test("Date has passed", () => {
    expect(isDateValid("2020-10-11")).toBe(false)
  })

  test("Date is valid", () => {
    expect(isDateValid("2022-10-11")).toBe(true)
  })
})
