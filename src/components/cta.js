/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Cta() {
    return (
        <div className='call-to-action' sx={{
            backgroundColor: 'cta',
            height: '12.5rem',
            padding: '1rem'
          }}>
            <h2 sx={{color: 'title'}}>Free Guide: Learning How To Learn</h2>
            <input type='text' placeholder='Email Address'/>
            <button>Free Access</button>
          </div>
    )
}