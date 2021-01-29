/**@jsx jsx */
import { jsx } from 'theme-ui'
import LinkButton from './linkButton'
export default function HomeHero({copy,tagline,image, buttonText, link}) {
    const buttonDisplay = buttonText ? 'block' : 'none';
    return(
             <section className="Hero" sx={{
                 backgroundColor: '#0F325A',
                 display: 'flex',
                 flexDirection: 'column',
                 paddingTop: '3rem',
                 marginBottom: '3rem'
             }}>
                <div sx={{
                    color: 'white',  
                    width: '85%',
                    margin: '0 auto'            
                }}>
                    <h1 sx={{
                        textAlign: 'center'
                    }}>{copy}</h1>
                    <span sx={{
                        textAlign: 'center',
                        marginBottom:'2rem'
                    }}>{tagline}</span>
                    <LinkButton link={link} text={buttonText} display={buttonDisplay}/>
                </div>
                <img src={image} alt="Caribbean Students Excited To Learn" sx={{
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