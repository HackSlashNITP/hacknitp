import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import About from "../components/about"
import Stacks from "../components/stacks"
import Sponsers from "../components/sponsers"
import Contact from "../components/contact"
import Faq from "../components/faq"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />

    <About />
    <Stacks />
    <Sponsers />
    <Faq />
    <Contact />
  </Layout>
)

export default IndexPage
