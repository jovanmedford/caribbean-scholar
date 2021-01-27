/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
//Import images
import Owl from '../img/owl.svg'
import Spout from '../img/Spout.svg'
import Laptop from '../img/Desktop.svg'
import Boy from '../img/boy-at-desk.svg'
import Footer from '../components/footer'
//Import components
import MainHeader from '../components/mainHeader'
import IconAndText from '../components/iconAndText'
import { faImage, faClock} from '@fortawesome/free-regular-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import Header from '../components/header'

export default function Home() {
    const mobileWidth = 640;
    const [isMobile, setMobile] = useState(window.innerWidth < mobileWidth);
    const updateMedia = () => {
        setMobile(window.innerWidth < mobileWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div sx={{
        }}>
            <MainHeader />
             <section className="Hero" sx={{
                 backgroundColor: '#0F325A',
                 display: 'flex',
                 flexDirection: 'column',
                 padding: '3rem 0',
             }}>
                <div sx={{
                    color: 'white',  
                    width: '85%',
                    margin: '0 auto'            
                }}>
                    <h1 sx={{
                        fontWeight: 'bold',
                        margin: '0',
                        textAlign: 'center'
                    }}>Take Control of Your Education</h1>
                    <p sx={{
                        textAlign: 'center'
                    }}>Join the #1 Online Learning Community in the Caribbean</p>
                </div>
                <img src={isMobile ? Owl : Owl} sx={{
                    display: 'block',
                    margin: '0 auto',
                    width: '10rem'
                }}/>
             </section>
            
            <h1 sx={{
                fontWeight: 'bold',
                textAlign: 'center'
            }}>What Do We Offer?</h1>
             <section sx={{
                 display: 'flex',
                 flexWrap: 'wrap'
             }}>
                 <IconAndText heading="High Quality Content" icon={faImage} text={"Beautifully designed material to help make learning fun."}/>
                 <IconAndText heading="Learn at Your Own Pace" icon={faClock} text= {"Take your time - skip ahead, rewatch or pause as much as you like."}/>
                 <IconAndText heading="Interactive Quizzes" icon={faCheck} text={"Check in with yourself to see how you're coming along"}/>
             </section>
            <Footer />
        </div> 
    )
}