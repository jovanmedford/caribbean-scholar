/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import MainHeader from '../components/mainHeader'
import HomeHero from '../components/homeHero'
import Owl from '../img/owl.svg'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import { Spacing } from '../utils/spacing'
import SEO from '../components/seo'

export default function About({data}){
    const [colorMode, setColorMode] = useColorMode()
    setColorMode('home');
    const post = data.wpPost;

    return(
        <div>
            <SEO title='About Us' 
                excerpt='Hear our story! Read more about how we intend to change the educational landscape in the West Indies.'/>
            <MainHeader />
            <HomeHero copy='About Us' tagline="Here's Our Story:" image={Owl}/>
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

export const query = graphql`
    query {
        wpPost(title: {eq: "About"}){
            content
        }
    }
`