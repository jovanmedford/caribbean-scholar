/** @jsx jsx */
import { useState } from 'react'
import { jsx, useColorMode } from 'theme-ui'
import { subjects } from '../../utils/subjects'
import Logo from '../../img/logopng.png'
//components
import SubjectLevel from '../../components/exam-countdown/SubjectLevel'
import SubjectName from '../../components/exam-countdown/SubjectName'
import remCalc from '../../utils/remCalc'
export default function () {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode('home');
  setColorMode('examCountdown');

  const [state, setState] = useState({
    level: "csec",
    name: "math",
    nameInput: "math",
    menuIsOpen: false
  })

  const handleLevelChange = function(event) {
    setState({
      ...state,
      level: event.target.value
    })
  };

  const handleNameClick = function() {
    setState({
      ...state,
      menuIsOpen: true,
    })
  }

  const handleNameChange = function(event) {
    setState({
      ...state,
      nameInput: event.target.value,
    });
  }

  const handleSubmit = function(event) {
    event.preventDefault();
    setState(prevState => {
      return {
        name: prevState.nameInput.toLowerCase(),
        nameInput: "",
        menuIsOpen: false,
        level: prevState.level
      }
    })
  }

  
  const subject = (state.name in subjects) ? subjects[state.name] : subjects["math"];
  const subjectDateTime = (state.level in subject) ? subject[state.level] : subject["csec"];
  const subjectDate = subjectDateTime
                        .toLocaleString('default', {month: 'long', day: 'numeric'})
  const subjectTime = subjectDateTime
                        .toLocaleString('default', {hour: 'numeric', dayPeriod: 'long'})

  return (
    <div sx = {{
      textAlign: 'center',
      marginTop: remCalc(64),
    }}>
      <img src={Logo} alt={'Caribbean Scholar Logo within link to blog home page'} sx ={{
              width: remCalc(210),
              marginBottom: remCalc(48),
              fontWeight: 400,
              fontSize: remCalc(31.25),
              }}/>
      <section>
          <form onSubmit={handleSubmit}>
            <SubjectLevel level={state.level} handleChange={handleLevelChange}/>
            <SubjectName 
              name={state.name}
              nameInput = {state.nameInput}
              menuIsOpen={state.menuIsOpen}
              handleClick={handleNameClick} 
              handleInputChange={handleNameChange}/>
          </form>
        <div>
          <span sx={{
          marginBottom: 0,
        }}>
          Date
        </span>
        <h1 sx={{
          margin: remCalc([0,0,24,0]),
        }}>{subjectDate}</h1>
        </div>

        <div>
          <span sx={{
          marginBottom: 0,
        }}>
          Time
        </span>
        <h1 sx={{
          margin: remCalc([0,0,24,0]),
        }}>{subjectTime}</h1>
        </div>
      </section>
    </div>
  );
}