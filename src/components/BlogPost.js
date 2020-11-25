/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql } from 'gatsby'
import Hero from '../components/hero'
import Me from '../img/me.jpg'
import PostHeader from '../components/PostHeader'

export default function BlogPost({data}) {
    const bodyMargin = '0 2rem';
    const post = data.wpPost;
    return (
        <div sx={{
            fontFamily: 'Avenir Next',
            h1: {
                fontWeight: 'normal',
                fontFamily: 'Avenir Next',
            }        
                }}>
            <Header />
            <PostHeader category={post.categories.nodes.name} title={post.title} 
            authorImg={Me} authorName={post.author.node.firstName + ' ' + post.author.node.lastName} date={post.date}/>
            <Hero isPost={true}/>
            <article sx={{
                margin: bodyMargin,
                fontSize: '1.5rem',
                lineHeight: '1.4'
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