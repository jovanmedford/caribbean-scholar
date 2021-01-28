/** @jsx jsx */
import { jsx } from 'theme-ui'

/**
 * Displays an image and description that caters to main audiences on landing page
 */

export default function TargetAudience({image, audience, heading, message, isReverse}) {
    const desktopFlexDirection = isReverse ? 'row-reverse' : 'row';
    const dekstopFlexPadding = isReverse ? '0 1% 0 0' : '0 0 0 1%';
    return(
        <div sx={{
            display: 'flex',
            flexDirection: ['column', desktopFlexDirection],
            margin: '5rem 0',
            height: ['18rem','25rem'],
            h3: {
                margin: '0'
            }
        }}>
            <img src={image} sx={{
                width: ['16rem','49%'],
                margin: '0 auto',
                display: 'block'
                }}/>
            <div sx={{
                width: ['80%','49%'],
                padding: dekstopFlexPadding,
                margin: '0 auto',
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
               <span>{audience}</span>
               <h3>{heading}</h3>
               <p sx={{fontSize:1}}>{message}</p>
            </div>
        </div>
    );
}

TargetAudience.defaultProps = {
    isReverse: false
}