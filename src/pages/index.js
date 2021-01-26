/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Owl from '../img/owl72.png'
import Footer from '../components/footer'
import MainHeader from '../components/mainHeader'
export default function Home() {
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
                <img src={Owl} sx={{
                    display: 'block',
                    margin: '0 auto',
                }}/>
             </section>
            <Footer />
        </div> 
    )
}