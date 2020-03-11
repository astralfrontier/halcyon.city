import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Jumbotron from "react-bootstrap/Jumbotron"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Container fluid>
      <Row>
        <Col xs={6}>
          <Jumbotron>
            <h1>Classmate Generator</h1>
            <p>
              Need some NPCs for your game? Create a few key characters with ties to your PCs.
            </p>
            <p>
              <Button href="/classmate" variant="primary">
                Classmates
              </Button>
            </p>
          </Jumbotron>
        </Col>
        <Col xs={6}>
          <Jumbotron>
            <h1>Custom Playbooks</h1>
            <p>
              Links to custom playbooks, auto-generated from the Masks Discord
              spreadsheet.
            </p>
            <p>
              <Button href="/playbooks" variant="primary">
                Playbooks
              </Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
