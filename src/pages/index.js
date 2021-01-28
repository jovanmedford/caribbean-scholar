/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
//Import images
import Spout from '../img/Spout.svg'
import Laptop from '../img/Desktop.svg'
import Boy from '../img/boy-at-desk.svg'
import Footer from '../components/footer'
//Import components
import MainHeader from '../components/mainHeader'
import LinkButton from '../components/linkButton'
import Students from '../img/Students.svg'
import IconAndText from '../components/iconAndText'
import TargetAudience from '../components/targetAudience'
import { faImage, faClock} from '@fortawesome/free-regular-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

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
                        textAlign: 'center',
                        marginBottom:'2rem'
                    }}>Join the #1 Online Learning Community in the Caribbean</span>
                    <LinkButton link='https://school.thecaribbeanscholar.com/' text='Get Started'/>
                </div>
                <img src={Students} alt="Caribbean Students Excited To Learn" sx={{
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
                        message='The most complete online experience for CAPE and CSEC students.' isReverse={true}/> 
                <TargetAudience image={Laptop} audience='Adults' heading='You can Finally Go Back To School' message='Our programs are perfect for busy adults looking to do CXC’s. '/>
             </section>
            

             <section className="benefits" sx={{
                 backgroundColor: 'aliceblue',
                 margin: '4rem 0',
                 padding: '2rem 0'
             }}>
                <h2 sx={{
                textAlign: 'center',
                }}>Why Caribbean Scholar Courses?</h2>
                 <div sx={{
                     display: 'flex',
                     flexWrap: 'wrap',
                     margin: '0 auto',
                     width:['100%','80%']
                 }}>
                    <IconAndText heading="High Quality Content" icon={faImage} text={"Beautifully designed material to help make learning fun."}/>
                    <IconAndText heading="Learn at Your Own Pace" icon={faClock} text= {"Take your time - skip ahead, rewatch or pause as much as you like."}/>
                    <IconAndText heading="Interactive Quizzes" icon={faCheck} text={"Check in with yourself to see how you're coming along"}/>
                 </div>
             </section>
             
             <section sx={{
                 backgroundColor: '#0F325A',
                 width: ['100%','80%'],
                 margin: '5rem auto',
                 padding: ['2rem','3rem','4rem'],
                 color: 'white'
                 }}>
                     <div sx={{
                         
                     }}>
                     <h2 sx={{margin:'0'}}>Try Our Pre-Algebra Course For Free!</h2>
                     <p sx={{marginBottom:'1rem'}}>Come get a full demo or the Caribbean Scholar experience before you spend a dime.</p>
                     <LinkButton link='https://school.thecaribbeanscholar.com/courses/pre-algebra' text="Let's Go!" />
                     </div>
             </section>

             <section className='addtional-resources' sx={{
                 width:['80%'],
                 margin: '0 auto 5rem auto'
             }}>
                <h2>Additional Resources</h2>
                 <div>
                    <h3>Caribbean Scholar Blog</h3>
                    <p>In-depth guides on CXC’s, Sbas and much more. Take a <Link to='/blog' sx={{color:'secondary'}}>look</Link>.</p>
                 </div>
                 <div>
                    <h3>Dowloadables</h3>
                    <p>Reference material for you to use on the <Link to='#' sx={{color:'secondary'}}>go</Link>.</p>
                 </div>
                
             </section>


            
            <Footer />
        </div> 
    )
}