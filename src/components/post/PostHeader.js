/** @jsx jsx */
import { jsx } from "theme-ui"
import { Spacing } from "../../utils/spacing"

export default function PostHeader(props) {
  return (
    <section
      className="body"
      sx={{
        width: ["100%", "100%", "50%"],
        margin: ["0 auto", "1rem auto 0 auto"],
        textAlign: "left",
      }}
    >
      <h3
        sx={{
          margin: 0,
          color: "accent",
          fontWeight: "normal",
          fontSize: [2, 3],
        }}
      >
        {props.category}
      </h3>
      <h1
        sx={{
          margin: 0,
          fontSize: [2, 3],
          fontWeight: "500",
        }}
      >
        {props.title}
      </h1>
      <section
        className="bio"
        sx={{
          width: "100%",
          marginBottom: "0.5rem",
          display: "flex",
          textAlign: "left",
        }}
      >
        <div
          className="bio__image"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={props.authorImg}
            sx={{
              margin: "0 1rem 1rem 0",
              borderRadius: "100%",
              width: ["3.5rem", "4.5rem"],
            }}
          />
        </div>
        <div
          className="bio__info"
          sx={{
            display: "inline-block",
            marginTop: "0.5rem",
            span: {
              fontSize: 0,
            },
          }}
        >
          <span>{props.authorName}</span>
          <span>Last Edited: {props.date}</span>
        </div>
      </section>
    </section>
  )
}
