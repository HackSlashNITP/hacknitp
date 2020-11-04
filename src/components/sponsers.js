import React from "react"
import devfolio from "../images/sponsors/devfolio.png"
import bugsee from "../images/sponsors/bugsee.png"
import cb from "../images/sponsors/cb.png"
import balsamiq from "../images/sponsors/balsamiq.png"
import cloudsploit from "../images/sponsors/cloudsploit.png"
import matic from "../images/sponsors/matic.png"

class Sponsers extends React.Component {
  render() {
    return (
      <>
        <div id="sponsers">
          <div className="row d-flex justify-content-center sponserrow">
            <h1>Previous Sponsers</h1>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center stackrow">
              <div className="col-md-4 col-sm-12">
                <img
                  src={devfolio}
                  data-aos="zoom-in"
                  className="img-fluid"
                  alt="web"
                />
              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  src={bugsee}
                  data-aos="zoom-in"
                  className="img-fluid"
                  alt="VR"
                />
              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  src={cb}
                  data-aos="zoom-in"
                  className="img-fluid"
                  alt="AI"
                />
              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  src={cloudsploit}
                  data-aos="zoom-in"
                  className="img-fluid"
                  alt="Android"
                />
              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  src={balsamiq}
                  data-aos="zoom-in"
                  className="img-fluid"
                  alt="Game"
                />
              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  src={matic}
                  data-aos="zoom-in"
                  className="img-fluid"
                  alt="Game"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Sponsers
