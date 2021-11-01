/**@jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import remCalc from "../../utils/remCalc"
//components
import SubjectList from "./SubjectList"
export default function ({
  name,
  status,
  input,
  menuIsOpen,
  handleClick,
  handleListItemClick,
  handleInputChange,
  exams,
}) {
  return (
    <div>
      <h1
        onClick={handleClick}
        sx={{
          margin: 0,
          fontSize: remCalc(40),
          display: menuIsOpen ? "none" : "block",
        }}
      >
        {name} <FontAwesomeIcon icon={faCaretDown} alt="change subject" />
      </h1>

      <div
        className="countdown__subject"
        sx={{
          margin: "0 auto",
          display: menuIsOpen ? "block" : "none",
        }}
      >
        <label for="subect-name">
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
        {status === "loaded" && (
          <SubjectList
            input={input}
            handleClick={handleListItemClick}
            exams={exams}
          />
        )}
      </div>
    </div>
  )
}
