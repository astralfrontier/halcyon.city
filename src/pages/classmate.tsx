import React, { FunctionComponent } from "react"
import Loadable from "@loadable/component"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ClassmateGeneratorClient = Loadable(() => import(`../components/classmate`))

const GurpsMashupPage: FunctionComponent = () => 
  <Layout>
    <SEO title="Classmate Generator" description="Generate random NPC classmates for your Masks game"/>
    <ClassmateGeneratorClient />
  </Layout>

export default GurpsMashupPage