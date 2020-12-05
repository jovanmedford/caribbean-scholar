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
            marginBottom: '0'}}>{props.title}</h1>
        <section className="bio" sx={{
            height: '2.5rem',
            width: '100%',
            marginBottom: '1rem'
        }}>
            <div className="bio__image" sx={{display: 'inline-block'}}>
                <img src={props.authorImg} sx={{
                    margin: '0 1rem 1rem 0',
                    borderRadius: '100%',
                    width: ['2rem','3rem']
                }}/>
            </div>
            <div className="bio__info" sx={{
                display: 'inline-block',
                verticalAlign: 'top'
            }}>
                <span>{props.authorName}</span>
                <br/>
                <span sx={{fontSize: 'rem'}}>Last Edited: {props.date}</span>
            </div>
        </section>
    </section>
    )
}

