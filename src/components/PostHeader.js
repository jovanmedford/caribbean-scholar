/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function PostHeader(props) {
    const bodyMargin = '0 2rem';

    return(
    <section className='body' sx={{
        width: ['75%', '65%', '55%'],
        margin: '0 auto'
    }}>
        <h3 sx={{
            marginBottom: 0,
            color:'accent'
        }}>{props.category}</h3>
        <h1 sx={{
            marginTop: 0,
            fontSize: '2.6rem',
            marginBottom: '1rem'}}>{props.title}</h1>
        <section className="bio" sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            height: '2.5rem',
            width: '100%',
            marginBottom: '0.5rem'
        }}>
            <div className="bio__image" sx={{
            
            }}>
                <img src={props.authorImg} sx={{
                    borderRadius: '100%',
                    width: ['2rem','3rem']
                }}/>
            </div>
            <div className="bio__info" sx={{
                width: '65%'
            }}>
                <span>{props.authorName}</span>
                <br/>
                <span sx={{fontSize: 'rem'}}>Last Edited: {props.date}</span>
            </div>
            <span sx={{
                fontWeight: '700'
                }}><li>2 min</li></span>
        </section>
    </section>
    )
}

