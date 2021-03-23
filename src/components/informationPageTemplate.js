/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import MainHeader from '../components/mainHeader'
import HomeHero from '../components/homeHero'
import Footer from '../components/footer'
import { Spacing } from '../utils/spacing'
import SEO from '../components/seo'

export default function InformationPageTemplate({information, title}) {
    const [colorMode, setColorMode] = useColorMode()
    setColorMode('home');
    const post = information.wpPost;

    return(
        <div>
            <MainHeader />
            <HomeHero copy={title} tagline="Read the following carefully:"/>
            <article  sx={{
                    width: ['75%', '85%', '65%'],
                    margin: [`-3em auto ${Spacing.mobile.vertical.large} auto`,
                             `-6em auto${Spacing.tablet.vertical.large} auto`,
                             `-6em auto ${Spacing.desktop.vertical.large} auto`],
                    ul: {
                       paddingLeft: '3em'
                    },
                    h4: {
                        fontSize: 2
                    },
                    p: {
                        fontSize: 1,
                        lineHeight: '1.8',
                        fontWeight: '400',
                        margin: '1.25rem 0',
                    },
                    li: {
                        fontSize: 1,
                        listStyle: 'disc',
                    },
                    a: {
                        color: 'accent',
                        fontWeight: 'bold'
                    },
                    span: {
                        display: 'inline-block',
                        fontSize: '1.25em',
                    },
                    blockQuote: {
                        padding: '1rem 2rem',
                        backgroundColor: 'primary',
                        color: 'white',
                        borderLeft: '5px solid',
                        margin: '2rem auto',
                        borderColor: 'text',
                        fontWeight: 'normal',
                        p: {
                        },
                        cite: {
                            fontSize: '1.2rem',
                            marginTop: '1rem'
                        }
                    }
                
            }}dangerouslySetInnerHTML={{__html: post.content}}/>
            <Footer />
        </div>
    );
}