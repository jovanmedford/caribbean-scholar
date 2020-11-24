/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql } from 'gatsby'
import Hero from '../components/hero'
import Me from '../img/me.jpg'

export default function Post({data}) {
    const bodyMargin = '0 2rem';
    const wpPost = data.allWpPost.edges[2].node;
    return (
        <div sx={{
            fontFamily: 'Montserrat',

            h1: {
                fontWeight: 'normal'
            }        
                }}>
            <Header />
            <section className='body' sx={{
                margin: bodyMargin
            }}>
                <h3>Productivity</h3>
                <h1>{wpPost.title}</h1>
                <section className="bio" sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '3rem',
                    width: '100%',
                }}>
                    <div className="bio__image" sx={{
                    }}>
                        <img src={Me} sx={{
                            borderRadius: '100%',
                            width: '2rem'
                        }}/>
                    </div>
                    <div className="bio__info" sx={{
                        width: '65%'
                    }}>
                        <span>By Jovan Medford</span>
                        <br/>
                        <span sx={{fontSize: '0.8rem'}}>Last Edited: Nov 6th 2020</span>
                    </div>
                    <span><li>2 min</li></span>
                </section>
            </section>
            <Hero isPost={true}/>
            <article sx={{
                margin: bodyMargin,
                fontSize: '1.4rem',
                lineHeight: '1.5'
            }}
            dangerouslySetInnerHTML={{__html: wpPost.content}}>
            </article>
        </div>      
    )
}


export const query = graphql`
    {
            allWpPost {
              edges {
                node {
                  content
                  title
                  date(formatString: "YYYY-MM-DD")
                }
              }
            }
    }`