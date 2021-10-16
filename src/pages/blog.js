/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import Header from "../components/header/Header"
import BlogHomepageHero from "../components/blogHomepageHero"
import Cta from "../components/cta"
import PostPreview from "../components/PostPreview"
import { graphql } from "gatsby"
import TextBanner from "../components/TextBanner"
import Footer from "../components/footer"
import SEO from "../components/seo"

export default function Blog({ data }) {
  const [colorMode, setColorMode] = useColorMode()
  setColorMode("dark")
  return (
    <div>
      <SEO
        title="Caribbean Scholar | Blog Homepage"
        excerpt="SBA guides, topic walk-throughs and much more! Free online learning resources for CXC students."
      />
      <Header />
      <h1
        sx={{
          fontSize: 1,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Blog
      </h1>
      <BlogHomepageHero />
      <PostPreview info={data.featured.nodes} />
      <TextBanner />
      <section
        className="top-posts"
        sx={{
          margin: "1rem auto",
        }}
      >
        <PostPreview
          info={data.topPost.nodes}
          showAdditionalPosts={false}
          additionalPosts={data.additionalPost.nodes}
        />
      </section>

      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    featured: allWpPost(
      limit: 3
      filter: { section: { name: { eq: "featured" } } }
    ) {
      ...PreviewInformation
    }

    additionalPost: allWpPost(
      limit: 3
      filter: { section: { name: { eq: "additionalPost" } } }
    ) {
      nodes {
        title
        slug
        categories {
          nodes {
            name
          }
        }
      }
    }
    topPost: allWpPost(
      limit: 3
      filter: { section: { name: { eq: "topPost" } } }
    ) {
      ...PreviewInformation
    }
  }

  fragment PreviewInformation on WpPostConnection {
    nodes {
      categories {
        nodes {
          name
        }
      }
      author {
        node {
          firstName
          lastName
        }
      }
      slug
      title
      modified(formatString: "MMMM Do, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                aspectRatio: 1.77
              )
            }
          }
        }
      }
    }
  }
`
