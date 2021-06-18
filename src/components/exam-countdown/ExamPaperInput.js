/** @jsx jsx */
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'

import remCalc from '../../utils/remCalc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function({index, handleClick}) {
  const paperNumber = index === 3 ? "3/2" : `${index+1}`

  const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -10px, 0);
  }

  70% {
    transform: translate3d(0, -5px, 0);
  }

  90% {
    transform: translate3d(0, 0px,0);
  }
`

  return (
    <div sx={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: remCalc(24),

      span: {
        fontSize: remCalc(31.25),
        margin: "0 0.5rem",
      },

      button: {
        background: 'none',
        border: 'none',
        position: 'relative',
        
        ':hover': {
          animationName: bounce,
          animationDuration: '1s'
        }
      },

      svg: {
        fontSize: '2rem',
        color: 'text'
      }
    }}>
        {
          index > 0 ? 
          <button onClick={(event) => handleClick(event,"previous")}>
          <FontAwesomeIcon icon={faAngleLeft} alt='previous exam paper'/>
         </button> : false
        }
        
        <span>Paper {paperNumber}</span> 

        {
          index < 3 ? 
          <button onClick={(event) => handleClick(event,"next")}>
          <FontAwesomeIcon icon={faAngleRight} alt='next exam paper'/>
          </button> : false
        }
   </div>
  )
}