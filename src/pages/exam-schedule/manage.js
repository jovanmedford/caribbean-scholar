/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { NewExamForm } from "../../components/newExamForm/NewExamForm"
import { requiredRule, dateRule } from "../../components/form/validationRules"

export default function () {
  const [, setColorMode] = useColorMode()
  setColorMode("chalkboard")
  return (
    <div>
      <h1 sx={headingStyle}>Set Exam Date</h1>
      <NewExamForm formConfig={formConfig} />
    </div>
  )
}

const headingStyle = {
  marginTop: "4rem",
  fontSize: 3,
  textAlign: "center",
}

const formConfig = [
  {
    name: "name",
    label: "Name",
    type: "text",
    validationRules: [requiredRule],
  },
  {
    name: "level",
    label: "Level",
    type: "select",
    options: ["CSEC", "CAPE"],
    validationRules: [requiredRule],
  },
  {
    name: "paperNumber",
    label: "Paper Number",
    type: "select",
    options: ["1", "2", "3/2"],
    validationRules: [requiredRule],
  },
  {
    name: "date",
    label: "Exam Date",
    type: "date",
    validationRules: [dateRule],
  },
]
