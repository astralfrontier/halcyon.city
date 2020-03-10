import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "react-bootstrap/Button"
import Jumbotron from "react-bootstrap/Jumbotron"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <h1>Custom Playbooks</h1>
      <p>
        Links to custom playbooks, auto-generated from the Masks Discord spreadsheet.
      </p>
      <p>
        <Button href="/playbooks" variant="primary">Playbooks</Button>
      </p>
    </Jumbotron>
  </Layout>
)

export default IndexPage
