/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Cta({size}) {
    return (
        <div className='call-to-action' sx={{
            backgroundColor: 'cta',
            width: ['100%','96%','80%'],
            padding: '1rem',
            margin: '0 auto 5rem auto'
          }}>
            <h2 sx={{
              color: 'title',
              fontSize: '2rem',
              textAlign: 'center'
              }}>Free Guide: Learning How To Learn</h2>
            <input type='text' placeholder='Email Address'sx={{
              margin: '0 auto',
              width: '18rem',
              height: '2.2rem'
            }}/>
            <button sx={{
              variant: 'buttons.primary',
              background: '#253D5B'
            }}>Free Access</button>
          </div>
    )
}