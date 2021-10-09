import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function () {
  return (
    <StaticImage
      src="../img/logopng.png"
      alt="Caribbean Scholar Logo"
      aspect-ratio={16 / 5}
      loading="eager"
      placeholder="none"
    />
  )
}
