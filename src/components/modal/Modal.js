/** @jsx jsx */
import { jsx } from "theme-ui"
import { Component, Fragment } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../button/Button"
/**
 * Appears on center screen when an event occurs
 * @param {String} heading - main text on modal
 * @param {String} className - additional styling applied to modal container
 * @returns {Component}
 */

export const Modal = ({
  heading,
  show,
  className,
  handleSubmit,
  handleCancel,
  children,
}) => {
  const overlay = {
    ...overlayStyle,
  }
  const modalContainer = {
    display: show ? "block" : "none",
    backgroundColor: "white",
    ...modalStyle,
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <Fragment>
          <motion.div
            sx={overlay}
            onClick={handleCancel}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
          ></motion.div>
          <motion.div
            sx={modalContainer}
            className={className}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <h2>{heading}</h2>
            {children}
            <div sx={buttonsContainer}>
              <Button
                sx={{ marginRight: "0.75rem" }}
                onClick={handleSubmit}
                label="Submit"
                type="primary"
              />
              <Button onClick={handleCancel} label="cancel" type="secondary" />
            </div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  )
}

const modalStyle = {
  borderRadius: "8px",
  color: "formText",
  width: "83.33%",
  maxWidth: "24rem",
  margin: "0 auto",
  position: "absolute",
  padding: "1rem 1rem 2rem 1rem",
  zIndex: 1000,
  h2: {
    fontSize: "1.25rem",
  },
  p: {
    fontSize: "1rem",
  },
}

const modalVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const overlayStyle = {
  backgroundColor: "#081B30",
  position: "absolute",
  zIndex: 100,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}

const overlayVariants = {
  visible: { opacity: "65%" },
  hidden: { opacity: 0 },
}

const buttonsContainer = {
  display: "flex",
  justifyContent: "center",
  marginTop: "0.5rem",
}
