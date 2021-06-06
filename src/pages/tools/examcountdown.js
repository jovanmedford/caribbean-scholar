/** @jsx jsx */
import { useState } from 'react'
import { jsx, useColorMode } from 'theme-ui'
import Logo from '../../img/logopng.png'
//components
import SubjectLevel from '../../components/exam-countdown/SubjectLevel'
import remCalc from '../../utils/remCalc'
export default function () {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode('home');
  setColorMode('examCountdown');

  const [state, setState] = useState({
    level: "CSEC",
    name: "Math",
    menuIsOpen: false
  })

  const handleLevelChange = function(event) {
    setState({
      level: event.target.value
    })
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
      <section>
        <div>
            <SubjectLevel level={state.level} handleChange={handleLevelChange}/>
        <h1 sx={{
          margin: remCalc([0,0,24,0]),
          fontSize: remCalc(48),
          display: 'none',
        }}>Math</h1>

        <div className="countdown__subject" sx={{
          margin: '0 auto',
        }}>
          <input sx={{
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

        <div>
          <span sx={{
          marginBottom: 0,
        }}>
          Date
        </span>
        <h1 sx={{
          margin: remCalc([0,0,24,0]),
        }}>November 10</h1>
        </div>

        <div>
          <span sx={{
          marginBottom: 0,
        }}>
          Time
        </span>
        <h1 sx={{
          margin: remCalc([0,0,24,0]),
        }}>9AM</h1>
        </div>
      </section>
    </div>
  );
}