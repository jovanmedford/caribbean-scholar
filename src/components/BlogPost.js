/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PostHeader from '../components/PostHeader'
import { Helmet } from 'react-helmet' 
import SEO from './seo'
import Footer from './footer'
import { Spacing } from '../utils/spacing'


export default function BlogPost({data}) {
    const post = data.wpPost;
    const childImageSharp = post.featuredImage.node.localFile.childImageSharp
    const source = childImageSharp.fluid;
    const socialImage = childImageSharp.resize;
    const name = post.author.node.firstName + ' ' + post.author.node.lastName;
    const avatar = post.author.node.avatar.url
    const altText = post.featuredImage.node.altText;
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
            authorImg={avatar} authorName={name} date={post.date}/>
            <Img fluid={source} alt={altText} sx={{
                height: ['18rem','18rem','18rem'],
                width: ['75%', '85%', '65%'],
                margin: '0 auto'
            }}/>
            
            <article sx={{
                width: ['90%', '85%', '65%'],
                margin: [`2em auto ${Spacing.mobile.vertical.large} auto`,
                         `2em auto${Spacing.tablet.vertical.large} auto`,
                         `2em auto ${Spacing.desktop.vertical.large} auto`],
                ul: {
                   paddingLeft: '3em'
                },
                h4: {
                    fontSize: 2
                },
                p: {
                    fontSize: 1,
                    lineHeight: '1.8',
                    fontWeight: '400',
                    margin: '1.25rem 0',
                },
                li: {
                    fontSize: 1,
                    listStyle: 'disc',
                },
                a: {
                    color: 'accent',
                    fontWeight: 'bold',
                    overflowWrap: 'break-word'
                },
                span: {
                    display: 'inline-block',
                    fontSize: '1em',
                    color: 'text',
                },
                blockQuote: {
                    padding: '1rem 2rem',
                    backgroundColor: 'primary',
                    color: 'white',
                    borderLeft: '5px solid',
                    margin: '2rem auto',
                    borderColor: 'text',
                    fontWeight: 'normal',
                    p: {
                    },
                    cite: {
                        fontSize: '1.2rem',
                        marginTop: '1rem'
                    }
                }
            }} css={{
                '.katex': {
                    fontSize: '1rem',
                    color: 'text'
                }
            }}
            dangerouslySetInnerHTML={{__html: post.content}}>
            </article>
            <Footer />
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
                avatar{
                    url
                }
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
                  altText
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