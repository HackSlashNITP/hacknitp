import React from "react"
import logo from "../images/logo.svg"
import Navigation from "./navigation"
import { Maindiv } from "./style"
class Main extends React.Component {
  render() {
    return (
      <>
        <div className="wrap">
          <Navigation />
          <div className="logowrap d-flex justify-content-center align-items-center">
            <img src={logo} className="img-fluid" />
          </div>
        </div>
      </>
    )
  }
}

export default Main
