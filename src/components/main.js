import React from "react"
import logo from "../images/logo.svg"
import Navigation from "./navigation"
class Main extends React.Component {
  render() {
    return (
      <>
        <div className="wrap">
          <Navigation />
          <div className="logowrap d-flex justify-content-center align-items-center">
            <img
              src={logo}
              alt="HackNITP'21"
              className="img-fluid"
              style={{ maxWidth: "85%" }}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Main
