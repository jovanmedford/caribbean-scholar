/** @jsx jsx */
import { useState, useEffect, Fragment } from "react"
import { jsx, useColorMode } from "theme-ui"
import { useAnimation } from "framer-motion"
import { getExams } from "../../utils/models"
// components
import ExamDateDisplay from "../../components/exam-countdown/DateView"
import Level from "../../components/exam-countdown/Level"
import Name from "../../components/exam-countdown/Name"
import PaperNumber from "../../components/exam-countdown/PaperNumber"
import { Countdown } from "../../components/countdown/Countdown"
// utils
import remCalc from "../../utils/remCalc"
import Search from "../../components/exam-countdown/Search"

export default function () {
  const controls = useAnimation()

  // Set Color
  const [, setColorMode] = useColorMode()
  const [status, setStatus] = useState("loading...")
  const [exams, setExams] = useState([])
  const [state, setState] = useState({
    level: "csec",
    name: "math",
    input: "",
    view: "date",
    paperIndex: 0,
    dateOpacity: 1,
    dateY: 0,
  })

  setColorMode("chalkboard")

  // get exams
  useEffect(() => {
    if (status !== "loading...") return
    async function fetchExams() {
      let data = await getExams()
      let newExams = data.map(doc => doc.data)
      setExams(newExams)
      setStatus("loaded")
    }
    fetchExams()
  }, [status])

  const handleLevelChange = function (event) {
    setState({
      ...state,
      view: "date",
      level: event.target.value,
    })
  }

  const handleNameClick = function () {
    setState({
      ...state,
      view: "search",
    })
  }

  const handleInputChange = function (event) {
    setState({
      ...state,
      input: event.target.value,
    })
  }

  const handlePaperButtonClick = function (event, direction, length) {
    event.preventDefault()
    controls.start({
      opacity: [0, 1],
      y: [10, 0],
    })
    if (direction === "next") {
      setState(prevState => {
        return {
          ...state,
          view: "date",
          paperIndex:
            prevState.paperIndex < length
              ? prevState.paperIndex + 1
              : prevState.paperIndex,
        }
      })
    } else {
      setState(prevState => {
        return {
          ...state,
          view: "date",
          paperIndex:
            prevState.paperIndex > 0
              ? prevState.paperIndex - 1
              : prevState.paperIndex,
        }
      })
    }
  }

  const handleSearchItemClick = function (event) {
    setState({
      ...state,
      name: event.target.innerText,
      view: "date",
      paperIndex: 0,
      input: "",
    })
  }

  const handleSubmit = function (event) {
    event.preventDefault()
    setState(prevState => {
      return {
        ...state,
        name: prevState.input,
        view: "date",
        input: "",
      }
    })
  }

  const handleCountdownClick = function () {
    setState(prevState => {
      return {
        ...state,
        input: "",
        view: prevState.view === "date" ? "countdown" : "date",
      }
    })
  }

  let examsFiltered =
    exams &&
    exams
      .filter(
        exam =>
          exam.name.toLowerCase() === state.name.toLowerCase() &&
          exam.level.toLowerCase() === state.level.toLowerCase()
      )
      .sort((a, b) => a.paperNumber - b.paperNumber)

  const currentExamTime =
    Array.isArray(examsFiltered) &&
    examsFiltered.length &&
    examsFiltered[state.paperIndex].date
  const currentExamPeriod =
    Array.isArray(examsFiltered) &&
    examsFiltered.length &&
    examsFiltered[state.paperIndex].period
 console.log(exams)
  return (
    <div
      sx={{
        textAlign: "center",
        marginTop: remCalc(64),
      }}
    >
      <form onSubmit={handleSubmit}>
        <Level level={state.level} handleChange={handleLevelChange} />
        <Name
          {...state}
          handleClick={handleNameClick}
          handleInputChange={handleInputChange}
        />
        <PaperNumber
          handleClick={handlePaperButtonClick}
          index={state.paperIndex}
          exams={examsFiltered || []}
        />
      </form>

      {status === "loaded" && (
        <div sx={state.view === "search" ? "" : countdownContainerStyle}>
          {Array.isArray(examsFiltered) && examsFiltered.length ? (
            <div>
              {
                {
                  date: (
                    <ExamDateDisplay
                      dateString={currentExamTime}
                      period={currentExamPeriod}
                      controls={controls}
                    />
                  ),
                  countdown: (
                    <Countdown
                      sx={{ marginTop: "20%" }}
                      dateString={currentExamTime}
                    />
                  ),
                }[state.view]
              }
            </div>
          ) : state.view === "search" ? (
            ""
          ) : (
            <span sx={errorMessageStyle}>No exam</span>
          )}
          {state.view === "search" && (
            <Search
              input={state.input}
              handleInputChange={handleInputChange}
              handleClick={handleSearchItemClick}
              exams={exams}
            />
          )}
        </div>
      )}

      <button onClick={handleCountdownClick} sx={buttonStyle}>
        {state.view === "date" ? "Exam Date" : "Countdown"}
      </button>
    </div>
  )
}

const errorMessageStyle = {
  position: "relative",
  top: "35%",
  fontSize: remCalc(48),
}

const countdownContainerStyle = {
  backgroundColor: "#28866C",
  borderRadius: "8px",
  padding: "1rem 0",
  margin: "2rem auto",
  maxWidth: remCalc(400),
  height: remCalc(330),
}

const buttonStyle = {
  position: "relative",
  background: "none",
  border: "3px solid",
  borderColor: "text",
  borderRadius: "10px",
  padding: "1rem 2rem",
  display: "inline-block",
  color: "text",
  fontWeight: "bold",
  fontSize: "1.125rem",
  zIndex: "1000",
}
