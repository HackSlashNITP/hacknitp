/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./navigation"
import "./layout.css"
import "./style.css"
import "aos/dist/aos.css"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./footer"

class Layout extends React.Component {
  constructor(props) {
    super()
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init()
    }
  }
  componentDidMount() {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init()
    }
  }
  componentDidUpdate() {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.refresh()
    }
  }
  render() {
    const children = this.props.children
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <div>
              <Navigation/>
              <main>{children}</main>
              <Footer/>
            </div>
          </>
        )}
      />
    )
  }
}
export default Layout
