import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

export default function ({ className }) {
  return (
    <Link className={className} style={{ display: "inline-flex" }} to="/filter">
      <FontAwesomeIcon icon={faSearch} />
    </Link>
  )
}
