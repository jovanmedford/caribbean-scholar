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
import Cta from '../components/cta'
import Students from '../img/Students.svg'
import IconAndText from '../components/iconAndText'
import TargetAudience from '../components/targetAudience'
import { faImage, faClock} from '@fortawesome/free-regular-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import Header from '../components/header'

export default function Home() {
    return (
        <div sx={{
        }}>
            <MainHeader />
             <section className="Hero" sx={{
                 backgroundColor: '#0F325A',
                 display: 'flex',
                 flexDirection: 'column',
                 paddingTop: '3rem',
                 marginBottom: '3rem'
             }}>
                <div sx={{
                    color: 'white',  
                    width: '85%',
                    margin: '0 auto'            
                }}>
                    <h1 sx={{
                        textAlign: 'center'
                    }}>Take Control of Your Education</h1>
                    <span sx={{
                        textAlign: 'center'
                    }}>Join the #1 Online Learning Community in the Caribbean</span>
                </div>
                <img src={Students} sx={{
                    display: 'block',
                    margin: '0 auto',
                    width: ['100%','24rem','40rem']
                }}/>
             </section>

             <section className='learningForAll' sx={{
                 width: '80%',
                 margin: '6rem auto 0 auto'
             }}>
                 <div sx={{
                     textAlign: 'center'
                 }}>
                 <span>A New Learning Experience For All West Indians</span>
                 <h2>Thrive From Home!</h2>
                 </div>
                <TargetAudience image={Boy} audience='Students' heading='Learning Can Be Fun' 
                        message='Imagine what life could be like if you enjoyed learning'/>
                <TargetAudience image={Spout} audience='Parents' heading='Only The Best For Your Child' 
                        message='The most complete online experience for CAPE and CSEC students online.' isReverse={true}/> 
                <TargetAudience image={Laptop} audience='Adults' heading='You can Finally Go Back To School' message='Our programs are perfect for busy adults looking to do CXC’s. '/>
             </section>
            
            <h2 sx={{
                textAlign: 'center'
            }}>Why Caribbean Scholar Courses?</h2>
             <section sx={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 backgroundColor: 'aliceblue'
             }}>
                 <IconAndText heading="High Quality Content" icon={faImage} text={"Beautifully designed material to help make learning fun."}/>
                 <IconAndText heading="Learn at Your Own Pace" icon={faClock} text= {"Take your time - skip ahead, rewatch or pause as much as you like."}/>
                 <IconAndText heading="Interactive Quizzes" icon={faCheck} text={"Check in with yourself to see how you're coming along"}/>
             </section>
             <Cta />
            <Footer />
        </div> 
    )
}