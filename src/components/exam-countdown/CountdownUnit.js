/**@jsx jsx */
import { jsx } from 'theme-ui'

export default function ({ number, unit}) {
    return (
      <div sx={{
        span: {
          fontSize: "3rem",
        },

        p: {
          fontSize: "1rem"
        }

      }}>
        <span>{number}</span>
        <p>{unit}</p>
      </div>
    )
}