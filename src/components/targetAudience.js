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
            marginTop: '7.5rem',
            h3: {
                margin: '0'
            }
        }}>
            <img src={image} sx={{
                width: ['', '15rem','15rem','22rem'],
                margin: '0 auto',
                display: 'block'
                }}/>
            <div sx={{
                width: ['80%','49%'],
                padding: dekstopFlexPadding,
                margin: '1.5rem auto 0 auto',
                display:'block',
            }}>
               <span sx={{
                   color: 'cta',
                   textTransform: 'uppercase',
                   fontWeight: 'bold',
                   fontSize: ['1em','1em','1.25em','1.25em'] 
                   }}>{audience}</span>
               <h3 sx={{color: 'heading2'}}>{heading}</h3>
               <p>{message}</p>
            </div>
        </div>
    );
}

TargetAudience.defaultProps = {
    isReverse: false
}