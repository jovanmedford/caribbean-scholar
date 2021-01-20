/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
    return(
        <div>
            <div classname="copyright" sx={{
                textAlign: 'center'
            }}>
              <p><FontAwesomeIcon icon={faCopyright}/> Caribbean Scholar {new Date().getFullYear()}</p>
            </div>
        </div>
    );
}