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
            <div style={{ width: `100%` }}>
              <div style={{ textAlign: `center` }}>
                <img
                  src={logo}
                  alt="HackNITP'21"
                  style={{ maxWidth: `85%` }}
                  className="img-fluid"
                />
              </div>
              <div className="d-flex justify-content-center m-4">
                <div 
                  class="apply-button" 
                  data-hackathon-slug="hacknitp" 
                  data-button-theme="light"
                  style={{ height: '44px', width: '312px' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Main
