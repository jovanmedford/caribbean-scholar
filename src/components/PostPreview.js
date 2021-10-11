/** @jsx jsx */
import { jsx } from "theme-ui"
import Card from "./card/BaseCard"
import { getImage } from "gatsby-plugin-image"
import AdditionalPostsList from "./additionalPostsList"

export default function PostPreview(props) {
  const showAdditionalPosts = props.showAdditionalPosts
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        flexWrap: "wrap",
        width: ["100%", "96%", "80%"],
        margin: "0 auto 0rem auto",
      }}
    >
      {props.info.map(post => (
        <Card
          category={post.categories.nodes[0].name}
          title={post.title}
          slug={post.slug}
          altText={post.featuredImage.node.altText}
          image={getImage(post.featuredImage.node.localFile)}
        />
      ))}
      {showAdditionalPosts && <AdditionalPostsList />}
    </div>
  )
}
