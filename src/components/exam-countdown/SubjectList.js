/**@jsx jsx */
import { jsx } from "theme-ui"
//components
import SubjectListItem from "./SubjectListItem"
//utils
import { v4 as uuidv4 } from "uuid"

export default function ({ input, handleClick, exams }) {
  const searchString = input.toLowerCase()
  const names = new Set(exams.map(exam => exam.name))
  const filteredNames = [...names].filter(name =>
    name.toLowerCase().includes(searchString)
  )
  const options = filteredNames.map(name => (
    <SubjectListItem key={uuidv4()} name={name} handleClick={handleClick} />
  ))

  return (
    <div sx={ListStyle}>
      <ul>{options}</ul>
    </div>
  )
}

const ListStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "background",
  zIndex: 1200,
}
