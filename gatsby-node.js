const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  res.data.allSanityPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug.current}`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
