/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Me from '../img/me.jpg'
import PostHeader from '../components/PostHeader'
import { Helmet } from 'react-helmet' 


export default function BlogPost({data}) {
    const post = data.wpPost;
    const source = post.featuredImage.node.localFile.childImageSharp.fluid;
    const name = post.author.node.firstName + ' ' + post.author.node.lastName;

    return (
        <div>
            <Helmet>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous"/>
            <script type="module">
            import renderMathInElement from "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.mjs";
            renderMathInElement(document.body);
            </script>
            </Helmet>
            
            
            <Header />
            <PostHeader category={post.categories.nodes[0].name} title={post.title} 
            authorImg={Me} authorName={name} date={post.date}/>
            <Img fluid={source} sx={{
                height: ['18rem','18rem','18rem'],
                width: ['75%', '65%', '60%'],
                margin: '0 auto'
            }}/>
            
            <article sx={{
                width: ['75%', '65%', '60%'],
                margin: '2rem auto',
                h2: {
                    fontSize: ['1.8rem','2.4rem','2.4rem'],
                    fontWeight: '400'
                },
                h3: {
                    fontSize: ['1.5rem','2rem', '2.2rem'],
                    marginBottom: '1rem',
                    fontWeight: '400'
                },
                p: {
                    fontSize: ['1.2rem','1.2rem','1.4rem'],
                    lineHeight: '1.6',
                    marginBottom: '1rem',
                    marginTop: 0
                },
                blockQuote: {
                    backgroundColor: 'muted',
                    margin: '0 auto',
                    borderColor: 'text',
                    fontWeight: 'normal',
                    fontStyle: 'italic',

                    p: {
                        paddingLeft: '1rem'
                    }
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
            seo {
                focuskw
                metaDesc
            }
            categories {
                nodes {
                name
                }
            }
            featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
        }
    }`