/**@jsx jsx */
import { jsx } from 'theme-ui'
import remCalc from '../../utils/remCalc'
export default function ({ name, nameInput, menuIsOpen, handleClick, handleInputChange }) {
  return(
    <div>
        <h1 onClick={handleClick} sx={{
          margin: remCalc([0,0,24,0]),
          fontSize: remCalc(48),
          display: menuIsOpen ? "none" : "block",
        }}>{name}</h1>

        <div className="countdown__subject" sx={{
          margin: "0 auto",
          display: menuIsOpen ? "block" : "none"
        }}>
          <label for="subect-name">
          <input 
            name="subject-name" 
            type="text" 
            value={nameInput}
            onChange={handleInputChange} 
            placeholder="type"
            sx={{
              display: "inline-block",
              width: "100%",
              textAlign: "center",
              marginBottom: remCalc(24), 
              color: "text",
              background: "none",
              fontSize: remCalc(48),
              fontWeight: "bold",
              padding: 0
          }}></input>
          </label>

          <div className="countdown__subject-list-container" sx={{
            position:'absolute',
            width: "100%",
            height: "100%",
            backgroundColor: 'background',

            li: {
              fontSize: remCalc(25),
            },
          }}>
            <ul>
              <li>Computer Science</li>
              <li>Communication Studies</li>
            </ul>
          </div>
        </div>
    </div>
  )
}