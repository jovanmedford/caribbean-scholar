/**@jsx jsx */
import { jsx } from 'theme-ui'

export default function ({ number, unit}) {
    return (
      <div sx={{
        span: {
          top: 0,
          fontSize: '3rem'
        },

        p: {
          fontSize: "1rem"
        }

      }}>
        <span className="countdown-unit__number">{number}</span>
        <p>{unit}</p>
      </div>
    )
}