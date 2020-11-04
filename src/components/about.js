import React from "react"
import idea from "../images/bulb.svg"

class About extends React.Component {
  render() {
    return (
      <>
        <div id="about">
          <div
            className="col-md-10 col-sm-12 d-flex align-items-end justify-content-end"
            style={{ marginTop: `20vh` }}
          >
            <h1 className="abouttxt" data-aos="zoom-in" data-aos-duration="300">
              About Us
            </h1>
          </div>
          <div className="row d-flex" style={{ minHeight: `40vh` }}>
            <div className="col-md-5 col-sm-12 d-flex justify-content-center">
              <div className="row">
                <img
                  src={idea}
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="img-fluid idea"
                  alt="HackNitp 3.0"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="row" style={{ marginTop: `5vh` }}>
                <h4
                  className="abouttxt"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                >
                  The hack is only a small part of the competition. The real
                  spirit lies in building your network in the growing tech
                  community and collaborating with some of the finest minds of
                  the nation. Just remember, taking the Hackathons too seriously
                  defeats the purpose. Save the seriousness for pitching to
                  investors. Keeping an open mind will open new doors, help
                  build new relationships and acquire new skills.This is
                  hackNITP.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default About
