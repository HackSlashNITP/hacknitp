import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import About from "../components/about"
import Stacks from "../components/stacks"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main/>
    <About/>
    <Stacks/>
  </Layout>
)

export default IndexPage
