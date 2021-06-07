/** @jsx jsx */
import { useState } from 'react'
import { jsx, useColorMode } from 'theme-ui'
import { subjects } from '../../utils/subjects'
import Logo from '../../img/logopng.png'
// components
import SubjectLevel from '../../components/exam-countdown/SubjectLevel'
import SubjectName from '../../components/exam-countdown/SubjectName'
import Countdown from '../../components/exam-countdown/Countdown'
// utils
import remCalc from '../../utils/remCalc'
import { text } from '@fortawesome/fontawesome-svg-core'
export default function () {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode('home');
  setColorMode('examCountdown');

  const [state, setState] = useState({
    level: "csec",
    name: "math",
    nameInput: "",
    menuIsOpen: false,
    countdownIsOpen: false,
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
      countdownIsOpen: false,
    })
  }

  const handleNameChange = function(event) {
    setState({
      ...state,
      nameInput: event.target.value,
    });
  }

  const handleSubjectListItemClick = function(event) {
    setState(prevState => {
      return {
      name: event.target.innerText,
      nameInput: "",
      level: prevState.level,
      menuIsOpen: false,
      countdownIsOpen: false,
    }
    })
  }

  const handleSubmit = function(event) {
    event.preventDefault();
    setState(prevState => {
      return {
        name: prevState.nameInput.toLowerCase(),
        nameInput: "",
        level: prevState.level,
        menuIsOpen: false,
        countdownIsOpen: false,
      }
    })
  }

  const handleCountdownClick = function(event) {
    setState(prevState => {
      return {
        name: prevState.name,
        nameInput: "",
        menuIsOpen: false,
        level: prevState.level,
        countdownIsOpen: !prevState.countdownIsOpen,
      }
    })
  }
  
  const subject = (state.name in subjects) ? subjects[state.name] : subjects["Math"];
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
              handleListItemClick={handleSubjectListItemClick} 
              handleInputChange={handleNameChange}/>
          </form>
          <Countdown 
            subjectDateTime={subjectDateTime}
            isOpen={state.countdownIsOpen}
          />

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

      <button
        dateTime={subjectDateTime}
        onClick={handleCountdownClick} 
        sx={{
          position: 'relative',
          background: 'none',
          border: '3px solid',
          borderColor: 'text',
          borderRadius: '10px',
          padding: '1rem 2rem',
          display: 'inline-block',
          color: 'text',
          fontWeight: 'bold',
          fontSize: '1.125rem',
          zIndex: '1000'
      }}>
        {state.countdownIsOpen ? "EXAM DATE" : "COUNTDOWN"} 
      </button>
    </div>
  );
}