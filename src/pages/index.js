/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Owl from '../img/owlforweb.png'
import Boy from '../img/boy.jpg'
import Footer from '../components/footer'
import MainHeader from '../components/mainHeader'
import { useEffect, useState } from 'react'
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
            <Footer />
        </div> 
    )
}