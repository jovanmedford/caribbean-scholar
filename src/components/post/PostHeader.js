/** @jsx jsx */
import { jsx } from "theme-ui"
import { Spacing } from "../../utils/spacing"

export default function PostHeader(props) {
  return (
    <section
      className="body"
      sx={{
        width: ["75%", "85%", "60%"],
        margin: [
          `${Spacing.mobile.vertical.large} auto 0 auto`,
          `${Spacing.tablet.vertical.large} auto 0 auto`,
          `${Spacing.desktop.vertical.large} auto 0 auto`,
        ],
        textAlign: "left",
      }}
    >
      <h3
        sx={{
          marginBottom: 0,
          color: "accent",
          fontWeight: "normal",
          fontSize: [2, 3],
        }}
      >
        {props.category}
      </h3>
      <h1
        sx={{
          marginTop: 0,
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
              width: ["3rem", "4.5rem"],
            }}
          />
        </div>
        <div
          className="bio__info"
          sx={{
            display: "inline-block",
            verticalAlign: "top",
            span: {
              fontSize: "14px",
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
