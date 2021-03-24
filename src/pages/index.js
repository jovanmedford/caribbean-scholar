/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
//Import images
import Spout from '../img/Spout.svg'
import Laptop from '../img/Desktop.svg'
import Boy from '../img/boy-at-desk.svg'
import Footer from '../components/footer'
//Import components
import SEO from '../components/seo'
import HomeHero from '../components/homeHero'
import MainHeader from '../components/mainHeader'
import LinkButton from '../components/linkButton'
import Students from '../img/Students.svg'
import IconAndText from '../components/iconAndText'
import TargetAudience from '../components/targetAudience'
import {faVideo, faBook, faPencilRuler} from '@fortawesome/free-solid-svg-icons'
//Import Utilities
import { Spacing } from '../utils/spacing'

export default function Home() {
    const [colorMode, setColorMode] = useColorMode()
    setColorMode('home')
    return (
        <div sx={{
        }}>
            <SEO title='Caribbean Scholar | High Quality CXC Online Courses' 
                excerpt='Polished material on all things CXC and your future at large. 
                Our content is perfect for any West Indian looking for quality online learning.'/>
            <MainHeader />
            <HomeHero copy='Take Control of Your Education' tagline='Join the #1 Online Learning Community in the Caribbean'
                        link='https://school.thecaribbeanscholar.com/' image={Students} buttonText='Get Started'
                        alt = 'Students from Barbados, Trinidad and Jamaica celebrating education.'
                        />
        

             <section className='learningForAll' sx={{
                 margin: [`0 0.5rem ${Spacing.mobile.vertical.extraLarge} 0.5rem`,
                          `0 0 ${Spacing.tablet.vertical.extraLarge} 3rem`,
                          `0 0.5rem ${Spacing.desktop.vertical.extraLarge} 7.5rem`]
             }}>
                 <div>
                 <h2 sx={{
                     textAlign:['center', 'center', 'left', 'left']
                 }}>Premium Virtual Learning</h2>
                 </div>
                <TargetAudience image={Boy} alt="antiguan student sits at desk and waves" audience='Students' heading='The Search is Over' 
                        message='Access all your CXC material in one place. No more scavenging the internet for information.'/>
                <TargetAudience image={Spout} alt="plant being watered by a spout" audience='Parents' heading='Only The Best For Your Child' 
                        message='The most complete online experience for CAPE and CSEC students.' isReverse={true}/> 
                <TargetAudience image={Laptop} alt="latop with words learn from home on screen" audience='Adults' heading='You can Finally Go Back To School' message='Our programs are perfect for busy adults looking to do CXCs. '/>
             </section>
            

             <section className="benefits" sx={{
                 backgroundColor: '#D0E9FF42',
                 variant: 'myPadding.outer',
                 marginBottom:  [`${Spacing.mobile.vertical.extraLarge}`,
                                 `${Spacing.tablet.vertical.extraLarge}`,
                                 `${Spacing.desktop.vertical.extraLarge}`],
             }}>
                <h2 sx={{
                    marginBottom: '3rem',
                    textAlign: ['center', 'cetner', 'left']
                }}>Why Caribbean Scholar?</h2>
                 <div sx={{
                     display: 'flex',
                     flexWrap: 'wrap',
                 }}>
                    <IconAndText icon={faVideo} text={"Beautifully designed material to help make learning fun."}/>
                    <IconAndText icon={faBook} text= {"Supplementary textbook included in your subscription."}/>
                    <IconAndText icon={faPencilRuler} text={"Extensive worksheets that reinforce your learning."}/>
                 </div>
             </section>
             
             <section sx={{
                 backgroundColor: '#0F325A',
                 margin: [`0 0 ${Spacing.mobile.vertical.extraLarge} 0`,
                          `0 1rem ${Spacing.tablet.vertical.extraLarge} 1rem `,
                          `0 3rem ${Spacing.desktop.vertical.extraLarge} 3rem`],
                 variant: 'myPadding.outer',
                 color: 'white'
                 }}>
                     <div sx={{
                         
                     }}>
                     <h2 sx={{margin:'0 0 2rem 0'}}>Try Our Algebra Course!</h2>
                     <p sx={{marginBottom:'2rem'}}>Get a full demo of the Caribbean Scholar experience before you spend a dime.</p>
                     <LinkButton link='https://school.thecaribbeanscholar.com/courses/make-algebra-make-sense' text="Let's Go!" />
                     </div>
             </section>

             <section className='addtional-resources' sx={{
                 padding : ['0 3rem','0 3rem','0 3rem','0 7.5rem'],
                 margin: [`0 auto ${Spacing.mobile.vertical.extraLarge} auto`,
                          `0 auto ${Spacing.tablet.vertical.extraLarge} auto`,
                          `0 auto ${Spacing.desktop.vertical.extraLarge} auto`],
                 h2: {
                     margin: '0 0 2rem 0'
                 },
                 h3: {
                    fontSize: '2',
                    margin: '1rem 0 0.25rem 0'
                 }
             }}>
                <h2>Additional Resources</h2>
                 <div>
                    <h3>Blog</h3>
                    <p>More content is on the way! For now you can start refining your
                        study habits with our Learnig How To Learn guides. Take a <Link to='/blog' sx={{
                            color:'accent',
                            fontWeight: 'bold'
                            }}>look</Link>.</p>
                 </div>
                 <div>
                    <h3>Dowloadables</h3>
                    <p>Reference material for you to use on the <Link to='/resources' sx={{
                        color:'accent',
                        fontWeight: 'bold'}}>go</Link>.</p>
                 </div>
                
             </section>


            
            <Footer />
        </div> 
    )
}