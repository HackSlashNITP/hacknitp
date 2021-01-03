import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import About from "../components/about"
import Themes from "../components/Theme/theme"
import Sponsers from "../components/sponsers"
import Organizers from "../components/organisers"
import Prizes from "../components/prizes/prizes"
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
    <Themes />
    <Prizes />
    <Sponsers />
    <Organizers />
    <Faq />
    <Footer />
    {/* <Contact /> */}
  </Layout>
)

export default IndexPage
