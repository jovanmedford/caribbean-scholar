/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import FormInput from './formInput'
import validateEmail from '../utils/validateEmail';
import validateName from '../utils/validateName'
import sendForm from '../utils/sendForm'

export default function ActiveCampaignForm() {
  const [state, setState] = useState({
    email:'',
    fullname:'',
    emailErrorMessage: '',
    nameErrorMessage: '',
    success: false,
  })

  let successMessage = <h2 sx={{
    color:'formSuccess'
  }}>Thanks! Your download is on the way.</h2>
const handleInputChange = (event) => {
  const targetName = event.target.name;
  const value = event.target.value;
  setState({...state,
    [targetName]: value
  })
}

 const onSubmit = (event) => {
        event.preventDefault(); 
        let data = new FormData(event.target);
       
        setState(state => {
          let emailError = validateEmail(state.email)
          let nameError = validateName(state.fullname)
          let success = false;

          if(!emailError && !nameError) {
            sendForm(data);
            success = true;
          }

          return({
            fullname: state.fullname,
            email: state.email,
            nameErrorMessage: nameError,
            emailErrorMessage: emailError,
            success: success
          })
        })
 }
    return(
        <form onSubmit={onSubmit}  sx={{
            backgroundColor: 'cta',
            width: ['100%','96%','80%'],
            padding: ['3rem 2rem','4.5rem 3rem 2rem 4.5rem', '2rem 9rem'],
            margin: ['0 0 4.5rem 0', '0 auto 4.5rem auto', '0 auto 4.5rem auto'],
            'input[type=text]': {
              marginBottom: '1rem',
            },
            span: {
              color: '#DF0000',
              fontSize: '1em',
              float: 'right'
            },
            'input[type=submit]': {
              variant: 'buttons.primary',
              
              
              ':hover': {
                cursor: 'pointer'
              }
            }
          }}>
            {
              state.success ? successMessage : 
              
              <div>
              <h2 sx={{
                color: 'title',
                fontSize: ['2em', '2em', '3em'],
                fontWeight: 'semibold',
                margin: '0 0 2rem 0'
                }}>Free Ebook: Make Algebra Make Sense</h2>
  
              <input type="hidden" name="u" value="1" />
              <input type="hidden" name="f" value="1" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
  
             <div className='form-inputs' sx={{
               marginBottom: '2rem'
             }}>
  
  
            <FormInput handleInputChange={handleInputChange} value={state.fullname} 
                        forName='fullname' text='Full Name:' id='fullname' name='fullname' 
                        placeholder='John Smith' errorMessage={state.nameErrorMessage}/>
  
            <FormInput handleInputChange={handleInputChange} value={state.email} 
            forName='email' text='Email:' id='email' name='email' 
            placeholder='someone@example.com' errorMessage={state.emailErrorMessage}/>
  
            </div>
            <input type="submit" value="Submit"></input>
            </div>
            }
            </form>
    )
}