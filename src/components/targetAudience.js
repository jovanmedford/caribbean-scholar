/** @jsx jsx */
import { jsx } from 'theme-ui'

/**
 * Displays an image and description that caters to main audiences on landing page
 */

export default function TargetAudience({image, audience, heading, message, isReverse}) {
    const desktopFlexDirection = isReverse ? 'row-reverse' : 'row';
    return(
        <div sx={{
            display: 'flex',
            flexDirection: ['column', desktopFlexDirection],
            margin: '5rem 0',
            h3: {
                margin: '0'
            }
        }}>
            <img src={image} sx={{
                width: '16rem',
                margin: '0 auto',
                display: 'block'
                }}/>
            <div sx={{
                width: '80%',
                margin: '0 auto',
                paddingLeft: ['0','5rem']
            }}>
               <span>{audience}</span>
               <h3>{heading}.</h3>
               <p>{message}</p>
            </div>
        </div>
    );
}

TargetAudience.defaultProps = {
    isReverse: false
}