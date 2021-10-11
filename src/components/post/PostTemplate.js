/** @jsx jsx */
import { jsx } from "theme-ui"
import Header from "../header/Header"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BlogPostHeader from "./PostHeader"
import { Helmet } from "react-helmet"
import SEO from "../seo"
import Footer from "../footer"

export default function BlogPostTemplate({ data }) {
  const post = data.wpPost
  const image = getImage(post.featuredImage.node.localFile)
  const name = post.author.node.firstName + " " + post.author.node.lastName
  const avatar = post.author.node.avatar.url
  const altText = post.featuredImage.node.altText
  const category = post.categories.nodes[0].name
  const pathname = `/blog/${category}/${post.slug}`

  return (
    <div>
      <SEO
        image={image}
        title={post.title}
        author={name}
        excerpt={post.seo.metaDesc}
        pathname={pathname}
      />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossorigin="anonymous"
        />
        <script type="module">
          import renderMathInElement from
          "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.mjs";
          renderMathInElement(document.body);
        </script>
      </Helmet>

      <Header />
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          width: ["85%", "85%", "75%"],
          margin: "1rem auto 0 auto",
          justifyContent: "space-between",
        }}
      >
        <BlogPostHeader
          category={post.categories.nodes[0].name}
          title={post.title}
          authorImg={avatar}
          authorName={name}
          date={post.date}
        />
        <GatsbyImage
          image={image}
          alt={altText}
          sx={{ width: ["100%", , "50%"] }}
        />
      </div>

      <article
        sx={{
          width: ["90%", "85%", "50%"],
          margin: "2rem auto",
          ul: {
            paddingLeft: "3em",
          },
          h2: {
            fontSize: [2, 3],
          },
          h3: {
            fontSize: [1, 2],
          },
          p: {
            fontSize: [0, 1],
            lineHeight: "1.8",
            fontWeight: "400",
            margin: "1.25rem 0",
          },
          li: {
            fontSize: [0, 1],
            listStyle: "disc",
          },
          a: {
            color: "accent",
            overflowWrap: "break-word",
          },
          span: {
            display: "inline-block",
            fontSize: "1em",
            color: "text",
          },
          iframe: {
            width: "100%",
          },
          blockQuote: {
            padding: "1rem 2rem",
            backgroundColor: "primary",
            color: "white",
            borderLeft: "5px solid",
            margin: "2rem auto",
            borderColor: "text",
            fontWeight: "normal",
            p: {},
            cite: {
              fontSize: "1.2rem",
              marginTop: "1rem",
            },
          },
        }}
        css={{
          ".katex": {
            fontSize: "1rem",
            color: "text",
          },
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></article>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      content
      title
      slug
      date(formatString: "YYYY-MM-DD")
      author {
        node {
          firstName
          lastName
          avatar {
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
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                aspectRatio: 2
              )
            }
          }
        }
      }
    }
  }
`
