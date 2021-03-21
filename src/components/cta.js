/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Cta({size}) {
    return (
        <div className='call-to-action' sx={{
            backgroundColor: 'cta',
            variant: 'myPadding.outer',
            margin: '0 auto 12rem auto'
          }}>
            <h2 sx={{
              color: 'title',
              fontSize: '2rem',
              marginBottom: '3rem'
              }}>Free E-book: Make Algebra Make Sense</h2>
            <input type='text' placeholder='Email Address'sx={{
              margin: '0 auto',
              width: '18rem',
              height: '2.2rem'
            }}/>
            <button sx={{
              variant: 'buttons.primary',
              backgroundColor: 'ctabutton'
            }}>Sign Up</button>
          </div>
    )
}