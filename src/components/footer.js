/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <footer sx={{
            borderTop: '0.5px solid',
            borderTopColor: 'text'
        }}>
        <section sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '80%',
            margin: '0 auto'
        }}>
            <div className="footer-social" sx={{
                width: '25%'
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
                                color: 'text',
                                fontSize: '1.5rem'
                            }
                        }}>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faYoutubeSquare}/></a></li>
                    </ul>
                </div>
       

            <section className="footer-main" sx={{
                display: 'flex',
                minWidth: '9rem',
                maxWidth: '15rem',
                justifyContent: 'space-between'
            }}>
            
               
               
                <div className="footer-explore">
                    <h4 className="footer-title">Explore</h4>
                    <ul>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Search</li>
                    </ul>
                </div>
                
                <div className="footer-main-company" sx={{
                     width: '25%'
                }}>
                <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </section>

            <section className="footer-balance" sx={{
                 width: ['0%','50%']
            }}>

            </section>


        </section>
        <section className="footer-legal" sx={{
                textAlign: 'center'
            }}>
              <p><FontAwesomeIcon icon={faCopyright}/> Caribbean Scholar {new Date().getFullYear()}</p>
        </section>
        </footer>
    );
}