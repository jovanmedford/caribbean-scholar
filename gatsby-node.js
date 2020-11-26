const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/components/BlogPost.js")

  return graphql(`
    query {
      allWpPost {
        edges {
          node {
            categories {
              nodes{
                name
              }
            }
            slug
            content
            title
            date(formatString: "YYYY-MM-DD")
            id
          }
        }
      }
  }`, { limit: 1000}).then(result => {
    if (result.errors) {
      throw result.errors
    }
  
  //Create Blog Post Pages
  const BlogPosts = result.data.allWpPost.edges;
  BlogPosts.forEach(post => {
    const category = post.node.categories.nodes[0].name;
    createPage({
      path: `/blog/${category}/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
})
}