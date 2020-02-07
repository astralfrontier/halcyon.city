import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter: {title, description}, html } = markdownRemark
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Container>
        <Row>
          <Col>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`