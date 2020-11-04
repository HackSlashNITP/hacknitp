import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import About from "../components/about"
import Stacks from "../components/stacks"
import Sponsers from "../components/sponsers"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main/>
    <About/>
    <Stacks/>
    <Sponsers/>
    <Contact/>
  </Layout>
)

export default IndexPage
