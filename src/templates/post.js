import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query ($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
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
`

export default ({ data }) => (
  <Layout>
    {console.log(data)}
    <h1>{data.sanityPost.title}</h1>
    <p style={{ marginTop: "1rem" }}>
      {data.sanityPost.body[0].children[0].text}
    </p>
    <Link to="/">Back to home</Link>
  </Layout>
)
