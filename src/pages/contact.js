/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import MainHeader from '../components/mainHeader'
import HomeHero from '../components/homeHero'
import Mail from '../img/Mail.svg'
import Footer from '../components/footer'
import SEO from '../components/seo'

export default function Contact() {
    const [colorMode, setColorMode] = useColorMode()
    setColorMode('home')
    return(
        <div>
            <SEO title='Contact Us' 
                excerpt='Ask us anything! Use the information in this page to reach us anytime you want to find out more
                        about the program.'/>
             <MainHeader />
             <HomeHero copy='Contact Us' alt='blue envelope ready to be sent as mail' tagline='Got a question? Use the information below to reach us'
                       image={Mail} />
            <section sx={{
                width: '80%',
                margin:'10rem auto',
                textAlign: 'center'
                }}>
                <h3 sx={{textAlign: 'center'}}>Email Address:</h3>
                <span>info@thecaribbeanscholar.com</span>
            </section>
            <Footer />
        </div>    
    )
}