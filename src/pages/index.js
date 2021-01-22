/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Owl from '../img/webowl.png'
import Footer from '../components/footer'
export default function Home() {
    return (
        <div sx={{
            backgroundColor: 'white'
        }}>
             <Header />
             <section className="Hero">
                <div>
                    <h1>The Future is Yours.</h1>
                    <p>Join the #1 Online Learning Community in the Caribbean</p>
                </div>
                <img src={Owl} sx={{
                    height: '10rem'
                }}/>
             </section>
            <Footer />
        </div> 
    )
}