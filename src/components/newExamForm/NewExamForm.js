/** @jsx jsx */
import { jsx } from "theme-ui"
import { useForm } from "../form/useForm"
import { useState, useEffect } from "react"
import { Modal } from "../modal/Modal"
import { createExam } from "../../utils/models"

export const NewExamForm = ({ formConfig }) => {
  const [state, FormInputs] = useForm(formConfig)
  const [show, setShow] = useState(false)
  const [hasConfirmation, setConfirmation] = useState(false)

  useEffect(() => {
    if (hasConfirmation) {
      createExam(state)
    }
    return () => setConfirmation(false)
  })

  const confirmDetails = () => {
    setConfirmation(true)
    setShow(false)
  }

  const datetime = new Date(state.date)
  const formattedDate = datetime.toLocaleDateString("en", {
    month: "short",
    day: "numeric",
  })
  return (
    <form sx={formStyle}>
      {FormInputs}
      <button
        onClick={e => {
          e.preventDefault()
          setShow(true)
        }}
      >
        Submit
      </button>
      <Modal
        heading="Confirm Details"
        sx={modalStyle}
        show={show}
        handleSubmit={confirmDetails}
        handleCancel={() => setShow(false)}
      >
        <span>{state.level}</span>
        <h3>{state.name}</h3>
        <span>Paper {state.paperNumber}</span>
        <div sx={dateStyle}>
          <span>{formattedDate}</span>
          <span>{state.period}</span>
        </div>
      </Modal>
    </form>
  )
}

const formStyle = {
  width: "90%",
  maxWidth: "24rem",
  margin: "0 auto",
  label: {
    fonrSize: 1,
  },
  p: {
    marginBottom: "0.5rem",
    border: "none",
  },
}

const modalStyle = {
  display: "block",
  left: "50%",
  top: "39%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  h2: {
    fontSize: "1.9375rem",
  },
  h3: {
    fontSize: "1.25rem",
    margin: 0,
  },
}

const dateStyle = {
  marginTop: "1rem",
  marginBottom: "2rem",
}
