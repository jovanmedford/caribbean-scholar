/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Me from '../img/me.jpg'
import PostHeader from '../components/PostHeader'
import { Helmet } from 'react-helmet' 
import SEO from './seo'


export default function BlogPost({data}) {
    const post = data.wpPost;
    const childImageSharp = post.featuredImage.node.localFile.childImageSharp
    const source = childImageSharp.fluid;
    const socialImage = childImageSharp.resize;
    const name = post.author.node.firstName + ' ' + post.author.node.lastName;

    const category = post.categories.nodes[0].name;
    const pathname = `/blog/${category}/${post.slug}`

    return (
        <div>
            <SEO image={socialImage} title={post.title} author={name}  excerpt={post.seo.metaDesc} pathname={pathname}/>
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
                    fontSize: [3,4],
                    fontWeight: 600
                },
                h3: {
                    fontSize: [2,3],
                    marginTop: '1rem',
                    fontWeight: 'semibold'
                },
                p: {
                    fontSize: [1,2],
                    lineHeight: '2',
                    fontWeight: '400',
                    margin: '1rem 0',
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
            slug
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
                      resize(width: 1200, height: 630) {
                        src
                        height
                        width
                      }
                    }
                  }
                }
              }
        }
    }`