/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx, useColorMode } from 'theme-ui'
import Logo from '../../img/logopng.png'
// components
import SubjectDate from '../../components/exam-countdown/SubjectDate'
import SubjectLevel from '../../components/exam-countdown/SubjectLevel'
import SubjectName from '../../components/exam-countdown/SubjectName'
import SubjectPaper from '../../components/exam-countdown/SubjectPaper'
import Countdown from '../../components/exam-countdown/Countdown'
// utils
import remCalc from '../../utils/remCalc'
import getExamTimes from '../../utils/getExamTimes'
import formatExamTimes from '../../utils/formatExamTimes'

export default function () {
  const [,setColorMode] = useColorMode()
  setColorMode('examCountdown');

  const [state, setState] = useState({
    level: "csec",
    name: "math",
    nameInput: "",
    paperIndex: 0, 
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

  const handlePaperButtonClick = function(event,direction) {
      event.preventDefault();
      if(direction==="next") {
        setState(prevState => {
          return {
            ...state,
            paperIndex: prevState.paperIndex<3 ?
                            prevState.paperIndex + 1
                          : prevState.paperIndex,
          }
        })
      } else {
        setState(prevState => {
          return {
            ...state,
            paperIndex: prevState.paperIndex > 0 ?
                            prevState.paperIndex - 1
                          : prevState.paperIndex,
          }
        })
      }
    }

  const handleSubjectListItemClick = function(event) {
    setState(prevState => {
      return {
      ...state,
      name: event.target.innerText,
      nameInput: "",
      menuIsOpen: false,
      countdownIsOpen: false,
    }
    })
  }

  const handleSubmit = function(event) {
    event.preventDefault();
    setState(prevState => {
      return {
        ...state,
        name: prevState.nameInput.toLowerCase(),
        nameInput: "",
        menuIsOpen: false,
        countdownIsOpen: false,
      }
    })
  }

  const handleCountdownClick = function(event) {
    setState(prevState => {
      return {
        ...state,
        nameInput: "",
        menuIsOpen: false,
        countdownIsOpen: !prevState.countdownIsOpen,
      }
    })
  }
 
  const examTimes = formatExamTimes(
                      getExamTimes(state.name, state.level)
                    );
  const dateTime = examTimes[state.paperIndex].dateTime;
  
  const now = new Date();
  console.log(examTimes);
  let message;
  if(dateTime == null) {
    message = <span>No exam</span>
  } else if ((dateTime - now) < 0) {
    message = <span>This exam has past.</span>
  } 

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

          <form onSubmit={handleSubmit}>
            <SubjectLevel level={state.level} handleChange={handleLevelChange}/>
            <SubjectName 
              name={state.name}
              nameInput = {state.nameInput}
              menuIsOpen={state.menuIsOpen}
              handleClick={handleNameClick}
              handleListItemClick={handleSubjectListItemClick} 
              handleInputChange={handleNameChange}
            />
            <SubjectPaper 
              handleClick={handlePaperButtonClick}
              index={state.paperIndex}
            />
          </form>

          <div>
            {message ? message : 
            <div>
            <Countdown 
              subjectDateTime={dateTime}
              isOpen={state.countdownIsOpen}
            />
            <SubjectDate date={examTimes[state.paperIndex].date} time={examTimes[state.paperIndex].time}/>
            </div>
            }
          </div>

      <button
        dateTime={examTimes[state.paperIndex].dateTime}
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