/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Logo from '../img/logopng.png'

export default function mainHeader() {
    return (
        <header sx={{
            backgroundColor: '#0F325A',
            height: '4rem', 
            paddingTop: '2.5rem'
        }}>
            <div sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '80%',
                margin: '0 auto'
            }}>
            <img src={Logo} sx={{
                width: '9rem'
            }}/>
            <div sx={{

            }}>
                <ul sx={{
                    display: ['none','flex'],
                    justifyContent:'space-between',
                        li: {
                            display: ['none', 'block'],
                            margin: '0 0.5rem'
                        }
                }}>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><a href='https://school.thecaribbeanscholar.com/collections'>Courses</a></li>
                    <li><Link to='#'>Resources</Link></li>
                    <li><Link to='#'>About</Link></li>
                </ul>
            </div>
            </div>
        </header>
    )
}