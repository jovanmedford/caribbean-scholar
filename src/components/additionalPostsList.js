/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function AdditionalPostsList() {
    return(
        <aside className='more-featured-posts' sx={{
            display: ['none','block'],
            position: 'relative',
            top: '-60px',
            width: '25%',

            p: {
                fontSize: '1rem',
                fontWeight: 'semibold'
            }
        }}>
            <h3 sx={{
                fontSize: '1.3rem',
                color: '#C8707A',
                marginBottom: '0.5rem'
            }}>Learning to Learn </h3>
            <p className>Embracing your procrastination habits - becoming consistent</p>
            <hr/>
            <p className>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.</p>
            <hr/>
            <p className>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.</p>              

        </aside>
    )
}