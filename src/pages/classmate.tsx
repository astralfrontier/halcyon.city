import React, { FunctionComponent } from "react"
import Loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ClassmateGeneratorClient = Loadable(() => import(`../components/classmate`))

const GurpsMashupPage: FunctionComponent = () => 
  <Layout>
    <SEO title="Classmate Generator" description="Generate random NPC classmates for your Masks game"/>
    <ClassmateGeneratorClient />

    <p>
      Random data polls from <a href="https://uinames.com/">uinames.com</a> - if no results load, wait a couple minutes and try again.
    </p>

    <p>
      For another version of this basic concept, check out Hex's{' '}
      <a href="https://docs.google.com/spreadsheets/d/1PDy5rgkCTjhRm9Wq5owt06UxCXyv5iTAbWYpEY7u6hc/edit#gid=0">Classroom Generator</a>,
      or look at Monsterhearts for a seating chart system.
    </p>
  </Layout>

export default GurpsMashupPage