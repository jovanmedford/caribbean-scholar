/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import MainHeader from '../components/mainHeader'
import HomeHero from '../components/homeHero'
import ResourcesImage from '../img/Resources.svg'
import Footer from '../components/footer'
import SEO from '../components/seo'

export default function Resources() {
    const [colorMode, setColorMode] = useColorMode()
    setColorMode('home')
    return(
        <div>
            <SEO title='Free Online CXC Resources | Caribbean Scholar' 
                excerpt='Gifts for you! Crafty downloadable materials to help you along with your exam
                preparations'/>
             <MainHeader />
             <HomeHero copy='Resources' alt='Online CSEC Math Book' tagline='Extra materials for you to read, download and enjoy'
                       image={ResourcesImage} />
            <section sx={{
                width: '80%',
                margin:'10rem auto',
                textAlign: 'center'
                }}>
                <h2 sx={{textAlign: 'center'}}>Sit Tight</h2>
                <span>We're working on some great content for you.</span>
            </section>
            <Footer />
        </div>    
    )
}