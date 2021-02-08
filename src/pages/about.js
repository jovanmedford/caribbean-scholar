/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import MainHeader from '../components/mainHeader'
import HomeHero from '../components/homeHero'
import Owl from '../img/owl.svg'
import Footer from '../components/footer'
import { graphql } from 'gatsby'

export default function About({data}){
    const [colorMode, setColorMode] = useColorMode()
    setColorMode('home');
    const post = data.wpPost;

    return(
        <div>
            <MainHeader />
            <HomeHero copy='About Us' tagline="Here's Our Story:" image={Owl}/>
            <article  sx={{
                width: ['80%','60%',],
                margin: '3rem auto',
                h4: {
                    fontSize: '2rem'
                },
                p: {
                    fontSize: '1.2rem',
                    lineHeight: '2',
                    margin: '0.4rem 0'
                },
                ul: {
                    width: ['80%','60%'],
                    margin: '1rem 2rem'
                },
                li: {
                    fontSize: '1.2rem',
                    listStyle: 'disc'
                },
                a: {
                    color: 'secondary'
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