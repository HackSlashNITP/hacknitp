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
          {/* <img className="img-fluid bulb" src={bulb} alt=" " />
        <img className="img-fluid stack" src={stack} alt=" " />
        <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <div className="row" style={{ marginTop: `10vh` }}>
            <img
              src={maintext}
              data-aos="zoom-in-right"
              className="img-fluid"
              alt="HackNitp 3.0"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div className="row" style={{ marginTop: `10vh` }}>
            <img
              src={hacker}
              data-aos="zoom-in-left"
              className="img-fluid"
              alt=" "
            />
          </div>
        </div>
        <div
          className="col-md-6 col-sm-12 d-flex justify-content-center"
          style={{ marginTop: `6vh` }}
        >
          <h3 className="htext">
            The one that hacker craves for is on its way.....
          </h3>
        </div> */}
        </div>
      </>
    )
  }
}

export default Main
