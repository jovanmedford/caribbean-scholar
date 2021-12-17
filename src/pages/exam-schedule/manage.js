/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useEffect, useState } from "react"
import { NewExamForm } from "../../components/newExamForm/NewExamForm"
import { requiredRule, dateRule } from "../../components/form/validationRules"
import { getSubjects } from "../../utils/models"

export default function () {
  const [, setColorMode] = useColorMode()
  const [items, setItems] = useState([])
  setColorMode("chalkboard")

  useEffect(() => {
    async function fetchSubjects() {
      let data = await getSubjects()
      let newItems = data.map(doc => doc.data.name)
      setItems(newItems)
    }
    fetchSubjects()
  }, [])

  const formConfig = [
    {
      name: "name",
      type: "autocomplete",
      label: "Name",
      items: items,
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
