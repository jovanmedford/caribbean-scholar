/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Owl from '../img/owlforweb.png'
import Boy from '../img/boy.jpg'
import Footer from '../components/footer'
import MainHeader from '../components/mainHeader'
import { useEffect, useState } from 'react'
import { faImage, faClock} from '@fortawesome/free-regular-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import IconAndText from '../components/iconAndText'
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
                 display: 'flex'
             }}>
                <div sx={{
                    paddingLeft: '1rem',
                    color: 'white'                   
                }}>
                    <h1>Own Your Education.</h1>
                    <p>Join the #1 Online Learning Community in the Caribbean</p>
                </div>
                <img src={isMobile ? Owl : Boy} sx={{
                    display: 'block',
                    margin: '0 auto',
                    
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