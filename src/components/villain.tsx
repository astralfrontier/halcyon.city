import React from "react"
import { graphql } from "gatsby"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "./layout"
import SEO from "./seo"

const lg = (label, value) => (
  <Row>
    <Col xs={3}>
      <Badge variant={"primary"}>{label}</Badge>
    </Col>
    <Col xs={9}>{value}</Col>
  </Row>
)

const lgl = (label, value, cssClassName) =>
  <>
  <Row>
    <Col>
      <Badge variant={"primary"}>{label}</Badge>
    </Col>
  </Row>
  <Row>
    <Col>
      <ul className={cssClassName}>
      {value.map(v => <li className={`specialchar ${cssClassName}`}>{v}</li>)}
      </ul>
    </Col>
  </Row>
  </>

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const {
    frontmatter: {
      author,
      name,
      realname,
      gen,
      drive,
      abilities,
      conditions,
      moves,
    },
    html,
    excerpt,
  } = markdownRemark
  return (
    <Layout>
      <SEO title={name} description={excerpt} />
      <Container>
        <Row>
          <Col>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Container>
                  {lg("Real Name", realname)}
                  {lg("Generation", gen)}
                  {lg("Drive", drive)}
                  {lg("Abilities", abilities)}
                  {lgl("Conditions", conditions, 'condition')}
                  {lgl("Moves", moves, 'move')}
                </Container>
                <strong>Author:</strong>{' '}{author}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        author
        name
        gen
        drive
        abilities
        conditions
        moves
      }
    }
  }
`
