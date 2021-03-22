/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Displays an icon and text
 * @param {FaIcon} icon The icon
 * @param {String} text The text
 * @returns {HTML} the
 */

 export default function IconAndText({icon, text}) {
     return (
        <div className='offering' sx={{
            textAlign: 'center',
            padding: '1rem 0',
            width: ['100%','33.33%']
        }}>
            <FontAwesomeIcon icon={icon} sx={{
                fontSize: '3em',
                marginBottom: '0.5rem',
                color: '#4caf50'
            }}/>
            <p sx={{
                width: '80%',
                fontSize: [0,0,1],
                margin: '0 auto'}}>{text}</p>
        </div>
     )
 }