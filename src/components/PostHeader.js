/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function PostHeader(props) {
    const bodyMargin = '0 2rem';

    return(
    <section className='body' sx={{
        margin: bodyMargin
    }}>
        <h3>{props.category}</h3>
        <h1>{props.title}</h1>
        <section className="bio" sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '3rem',
            width: '100%',
        }}>
            <div className="bio__image" sx={{
            }}>
                <img src={props.authorImg} sx={{
                    borderRadius: '100%',
                    width: '2rem'
                }}/>
            </div>
            <div className="bio__info" sx={{
                width: '65%'
            }}>
                <span>{props.authorName}</span>
                <br/>
                <span sx={{fontSize: '1rem'}}>Last Edited: {props.date}</span>
            </div>
            <span sx={{
                alignSelf: 'center',
                fontWeight: '700'
                }}><li>2 min</li></span>
        </section>
    </section>
    )
}

