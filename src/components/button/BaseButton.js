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
}) => {
  const buttonStyle = {
    background: backgroundColor ? backgroundColor : "none",
    backgroundColor: backgroundColor && backgroundColor,
    border: "2px solid",
    borderColor: border ? "text" : backgroundColor,
    color: backgroundColor ? "white" : "text",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
  }
  return (
    <button
      disabled={disabled}
      type="button"
      sx={buttonStyle}
      className={className}
    >
      {label}
    </button>
  )
}
