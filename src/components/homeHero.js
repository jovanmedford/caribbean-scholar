/**@jsx jsx */
import { jsx } from 'theme-ui'
import LinkButton from './linkButton'
import { Spacing } from '../utils/spacing'
export default function HomeHero({copy,tagline,image, buttonText, alt, link}) {
    const buttonDisplay = buttonText ? 'block' : 'none';
    return(
             <section className="Hero" sx={{
                 backgroundColor: '#0F325A',
                 display: 'flex',
                 flexDirection: 'column',
                 marginBottom: [`${Spacing.mobile.vertical.extraLarge}`,
                                `${Spacing.tablet.vertical.extraLarge}`,
                                `${Spacing.desktop.vertical.extraLarge}`]
             }}>
                <div sx={{
                    color: 'white',  
                    margin: [`0 ${Spacing.mobile.horizontal.large}`,
                            `0 ${Spacing.tablet.horizontal.large}`,
                            `0 ${Spacing.desktop.horizontal.large}`]           
                }}>
                    <h1 sx={{
                        textAlign: 'center',
                        margin: [`0 0 ${Spacing.mobile.vertical.small} 0`,
                                 `0 0 ${Spacing.tablet.vertical.small} 0`,
                                 `0 0 ${Spacing.mobile.vertical.small} 0`]
                    }}>{copy}</h1>
                    <span sx={{
                        textAlign: 'center',
                        display: 'block',
                        marginBottom: [`${Spacing.mobile.vertical.small}`,
                                       `${Spacing.tablet.vertical.small}`,
                                       `${Spacing.desktop.vertical.small}`]
                    }}>{tagline}</span>
                    <LinkButton link={link} text={buttonText} display={buttonDisplay}/>
                </div>
                <img src={image} alt={alt} sx={{
                    display: 'block',
                    margin: '0 auto',
                    width: ['100%','24rem','40rem']
                }}/>
             </section>
    )
}

HomeHero.defaultProps = {
    buttonText: '',
}