import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  {
    allSanityPost {
      edges {
        node {
          slug {
            current
          }
          title
          body {
            children {
              text
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "space-between",
          padding: 0,
        }}
      >
        {data.allSanityPost.edges.map(({ node: post }) => {
          return (
            <li
              key={post.slug.current}
              style={{
                flex: "1 45%",
                flexWrap: "wrap",
                maxWidth: "45%",
                margin: "1rem",
              }}
            >
              <h2 style={{ fontSize: "24px" }}>
                <Link to={post.slug.current}>{post.title}</Link>
              </h2>
              <p style={{ marginTop: "1rem", color: "#999" }}>
                By: <span>{post.author.name}</span>
              </p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
