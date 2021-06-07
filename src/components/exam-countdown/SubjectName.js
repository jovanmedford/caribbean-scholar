/**@jsx jsx */
import { jsx } from 'theme-ui'
import remCalc from '../../utils/remCalc'
//components
import SubjectList from './SubjectList'
export default function ({ name, nameInput, menuIsOpen, handleClick, handleListItemClick, handleInputChange }) {
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
            autoComplete="off"
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
          <SubjectList 
            nameInput={nameInput}
            handleClick={handleListItemClick}/>
        </div>
    </div>
  )
}