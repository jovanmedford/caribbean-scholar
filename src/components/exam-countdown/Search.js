/**@jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
//components
import ListItem from "./ListItem"
//utils
import { v4 as uuidv4 } from "uuid"
import remCalc from "../../utils/remCalc"

export default function ({ input, handleClick, handleInputChange, exams }) {
  const searchString = input.toLowerCase()
  const names = new Set(exams.map(exam => exam.name))
  const filteredNames = [...names].filter(name =>
    name.toLowerCase().includes(searchString)
  )
  const options = filteredNames.map(name => (
    <ListItem key={uuidv4()} name={name} handleClick={handleClick} />
  ))
  return (
    <Fragment>
      <div
        className="countdown__subject"
        sx={{
          margin: "0 auto",
        }}
      >
        <label htmlFor="subject-name">
          <input
            name="subject-name"
            type="text"
            value={input}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="search"
            sx={{
              display: "inline-block",
              width: "100%",
              textAlign: "center",
              color: "text",
              background: "none",
              fontSize: remCalc(39),
              fontWeight: "bold",
              padding: 0,

              "::placeholder": {
                fontSize: remCalc(36),
                color: "#28866C",
              },
            }}
          ></input>
        </label>
      </div>
      <div sx={ListStyle}>
        <ul>{options}</ul>
      </div>
    </Fragment>
  )
}

const ListStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "background",
  zIndex: 1200,
}
