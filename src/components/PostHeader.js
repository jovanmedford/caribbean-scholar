/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function PostHeader(props) {
    const bodyMargin = '0 2rem';

    return(
    <section className='body' sx={{
        width: ['75%', '65%', '60%'],
        margin: '0 auto'
    }}>
        <h3 sx={{
            marginBottom: 0,
            color:'accent'
        }}>{props.category}</h3>
        <h1 sx={{
            marginTop: 0,
            fontSize: ['2rem','2.8rem'],
            fontWeight: '500',
            marginBottom: '0.5rem'}}>{props.title}</h1>
        <section className="bio" sx={{
            width: '100%',
            marginBottom: '0.5rem',
            display: 'flex'
        }}>
            <div className="bio__image" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
                }}>
                <img src={props.authorImg} sx={{
                    margin: '0 1rem 1rem 0',
                    borderRadius: '100%',
                    width: ['2rem','2.5rem']
                }}/>
            </div>
            <div className="bio__info" sx={{
                display: 'inline-block',
                verticalAlign: 'top',
                span: {
                    fontSize: '14px'
                }
            }}>
                <span>{props.authorName}</span>
                <span>Last Edited: {props.date}</span>
            </div>
        </section>
    </section>
    )
}

