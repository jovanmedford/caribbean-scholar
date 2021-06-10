/** @jsx jsx */
import { jsx } from 'theme-ui'
import remCalc from '../../utils/remCalc'

/**
 * Select menu that allows user to change subject level
 * @param {handleChange} Passes up the change of state when option is selected
 * @returns {JSX} Select element
 */
export default function({ handleChange, level }) {
  return (
  <label for="level">
            <select id="level" value={level} onChange={handleChange} sx={{
              background: 'none',
              border: 'none',
              color: 'text',
              fontSize: remCalc(31.25),

              "*": {
                backgroundColor: 'background',
                fontSize: remCalc(20),
              }
            }}>
              <option value="csec">CSEC</option>
              <option value="cape">CAPE</option> 
            </select>
</label>
  );
}