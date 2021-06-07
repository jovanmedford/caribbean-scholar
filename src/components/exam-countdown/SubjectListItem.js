/**@jsx jsx */
import { jsx } from 'theme-ui'
import remCalc from '../../utils/remCalc'

export default function ({ handleClick, subjectName}) {
  return (
    <li 
      onClick={handleClick} 
      sx={{
        fontSize: remCalc(25),

        ":hover": {
          cursor: 'pointer'
        }
        }}>
      {subjectName}
    </li>
  )
}