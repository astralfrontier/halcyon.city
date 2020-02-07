import React from "react"
import { graphql } from "gatsby"
import Table from "react-bootstrap/Table"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Playbooks" />
    <Table responsive>
      <thead>
        <tr>
          <th>Playbook</th>
          <th>Author</th>
          <th>Inspirations</th>
        </tr>
      </thead>
      <tbody>
        {props.data.allGoogleSpreadsheetPlaybooksPlaybooks.nodes.map(({playbook, link, author__discordId_, characterInspiration}) => (
          <tr>
            <td><a href={link} rel="noopener noreferrer nofollow" target="_blank">{playbook}</a></td>
            <td>{author__discordId_}</td>
            <td>{characterInspiration}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Layout>
)

export default IndexPage

export const pageQuery  = graphql`
query Playbooks {
  allGoogleSpreadsheetPlaybooksPlaybooks {
    nodes {
      author__discordId_
      characterInspiration
      playbook
      link
    }
  }
}
`