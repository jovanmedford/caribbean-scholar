/** @jsx jsx */
import { jsx } from 'theme-ui'
import remCalc from '../../utils/remCalc'

export default function({index, handleClick}) {
  const paperNumber = index === 3 ? "3/2" : `${index+1}`
  return (
    <div sx={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: remCalc(24)
    }}>
        <button onClick={(event) => handleClick(event,"previous")}>-</button>
        <span 
        sx={{
          fontSize: remCalc(31.25),
          }}>
            Paper {paperNumber}
        </span> 
        <button onClick={(event) => handleClick(event,"next")}>+</button>
   </div>
  )
}