/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import DropDownMenu from '../components/dropdown-menu'
import Logo from '../img/logopng.png'
import DropdownMenu from '../components/dropdown-menu'

export default function mainHeader() {
    return (
        <header sx={{
            backgroundColor: '#0F325A',
            paddingTop: '2.5rem'
        }}>
            <div sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '80%',
                margin: '0 auto'
            }}>
                <Link to='/'>
                <img src={Logo} sx={{
                width: '9rem'
            }}/>
                </Link>
            <div sx={{

            }}>
                <DropdownMenu />
                <ul sx={{
                    display: ['none','flex'],
                    justifyContent:'space-between',
                        li: {
                            display: ['none', 'block'],
                            margin: '0 0.5rem',
                        },
                        'a:hover': {
                            color: 'secondary'
                        } 
                }}>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><a href='https://school.thecaribbeanscholar.com/collections'>Courses</a></li>     
                    <li><Link to='/blog'>Blog</Link></li> 
                </ul>
            </div>
            </div>
        </header>
    )
}