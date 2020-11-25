/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql } from 'gatsby'
import Hero from '../components/hero'
import Me from '../img/me.jpg'
import PostHeader from '../components/PostHeader'

export default function BlogPost({data}) {
    const bodyMargin = '0rem 2rem';
    const post = data.wpPost;
    return (
        <div>
            <Header />
            <PostHeader category={post.categories.nodes.name} title={post.title} 
            authorImg={Me} authorName={post.author.node.firstName + ' ' + post.author.node.lastName} date={post.date}/>
            <Hero isPost={true}/>
            <article sx={{
                margin: bodyMargin,
                h3: {
                    fontFamily: 'heading',
                    fontSize: '1.4rem',
                    marginBottom: '0.4rem'
                },
                p: {
                    fontWeight: 500,
                    fontSize: '1.25rem',
                    lineHeight: '1.6',
                    marginTop: 0
                }
            }}
            dangerouslySetInnerHTML={{__html: post.content}}>
            </article>
        </div>      
    )
}


export const query = graphql`
    query($id: String!) {
        wpPost(id: {eq: $id}) {
            content
            title
            date(formatString: "YYYY-MM-DD")
            author {
                node {
                firstName
                lastName
                }
            }
            categories {
                nodes {
                name
                }
            }
        }
    }`