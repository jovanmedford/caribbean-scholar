/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Displays an icon and text
 * @param {FaIcon} icon The icon
 * @param {String} text The text
 * @returns {HTML} the
 */

 export default function IconAndText({icon, heading, text}) {
     return (
        <div className='offering' sx={{
            textAlign: 'center'
        }}>
            <FontAwesomeIcon icon={icon} sx={{
                fontSize: '3rem'
            }}/>
            <h3>{heading}</h3>
            <p sx={{
                width: '80%',
                margin: '0 auto'}}>{text}</p>
        </div>
     )
 }