import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import About from "../components/about"
// import Stacks from "../components/stacks"
import Sponsers from "../components/sponsers"
import Organizers from "../components/organisers"
// import Contact from "../components/contact"
import Faq from "../components/faq"
import Footer from "../components/footer"
import Tabs from "../components/Tabs/tabs"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />

    <About />
    <Tabs />
    {/* <Stacks /> */}
    <Sponsers />
    <Organizers />
    <Faq />
    <Footer />
    {/* <Contact /> */}
  </Layout>
)

export default IndexPage
