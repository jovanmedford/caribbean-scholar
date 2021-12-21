/** @jsx jsx */
import { jsx } from "theme-ui"

/**
 * Primary UI component for user interaction
 */
export const BaseButton = ({
  backgroundColor,
  label,
  border,
  disabled,
  className,
  onClick,
}) => {
  const buttonStyle = {
    background: backgroundColor ? backgroundColor : "none",
    backgroundColor: backgroundColor && backgroundColor,
    border: "2px solid",
    borderColor: border ? "formText" : backgroundColor,
    color: backgroundColor ? "white" : "formText",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    display: "block",
  }
  return (
    <button
      disabled={disabled}
      type="button"
      sx={buttonStyle}
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
