/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <footer sx={{
            backgroundColor: '#0F325A',
            color: 'white',
            padding: '1rem'
        }}>
        <section sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: ['85%','55%','35%'],
            margin: '0.5rem 1rem 0 3rem',

            'a:hover':{
                color: 'secondary'
            }
        }}>
            <div className="footer-social" sx={{
                width: '33.3%'
                }}>
                <h4 sx={{
                    width: '6rem',
                }}>Follow Us</h4>
                    <ul sx={{
                        width: '5rem',
                        display: 'flex',
                            li: {
                                marginRight: '1rem'
                            },
                            a: {
                                color: 'white',
                                fontSize: '1.5rem',
                            },
                        }}>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
                        <li><a href="https://www.youtube.com/channel/UCnkPw_8rCoJmXw-Qiib09fg"><FontAwesomeIcon icon={faYoutube}/></a></li>
                    </ul>
                </div>
       

            <section className="footer-main" sx={{
                display: 'flex',
                width: '66.6%',
                justifyContent: 'space-between',                
                a: {
                    fontWeight: 'normal'
                }
            }}>
            
               
               
                <div className="footer-explore">
                    <h4 className="footer-title">Explore</h4>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><a href="https://school.thecaribbeanscholar.com/">Courses</a></li>
                        <li><Link to='/resources'>Resources</Link></li>
                    </ul>
                </div>
                
                <div className="footer-main-company">
                <h4>Company</h4>
                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/privacypolicy'>Privacy Policy</Link></li>
                    </ul>
                </div>
            </section>
        </section>
        <section className="footer-legal" sx={{
                margin: '0 auto',
                width: '80%'
            }}>
              <p sx={{ fontSize: '1rem',}}><FontAwesomeIcon icon={faCopyright}/> Caribbean Scholar {new Date().getFullYear()}</p>
        </section>
        </footer>
    );
}