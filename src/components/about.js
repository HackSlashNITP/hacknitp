import React from "react"
import { Aboutdiv } from "./style"

class About extends React.Component {
  render() {
    return (
      <>
        <Aboutdiv id="about" className="container-fluid">
          <div className="container d-flex justify-content-around">
            <div className="row" style={{ marginTop: `5vh` }}>
              <h1
                className="abouthead"
                data-aos="zoom-in"
                data-aos-duration="300"
              >
                The Event
              </h1>
              <p
                className="abouttxt"
                data-aos="zoom-in"
                data-aos-duration="300"
              >
                Hack can do anything and everything!! Here the red sun manifests
                danger and the trainee is hacking to varnish the danger. This is
                HACKNITP. Hackslash presents HACKNITP 3.0. The path to success
                starts with a single step and a single opportunity. This is
                one!! Hackslash Developers' Club, NIT Patna empowers students to
                achieve excellence in virtual world. The world of codes may
                frighten you like huge danger but club will hold your hands to
                teach you to fight but don't forget the game is yours. HackSlash
                is student driven community. Student shall work for growth of
                students. The club strives to build and improve the open
                sourcing environment and the coding culture of the whole city of
                Patna and eventually the whole state of Bihar. The will power
                and determination of each Developer, Competitive Coder, Designer
                and Innovative thinker is what governs our great community.
              </p>
            </div>
          </div>
          <div className="container" style={{ marginTop: `2vh` }}>
            <a
              style={{
                textDecoration: `none`,
                fontSize: `1.5rem`,
              }}
              className="abouthead"
              data-aos="zoom-in"
              data-aos-duration="300"
              href="http://bit.ly/rulebook-hacknitp3"
            >
              Download Rulebook
            </a>
          </div>
          <div className="container" style={{ marginTop: `5vh` }}>
            {/* <h1
              className="abouthead"
              data-aos="zoom-in"
              data-aos-duration="300"
            >
              About Us
            </h1>
            <p className="abouttxt" data-aos="zoom-in" data-aos-duration="300">
              HackSlash, currently under the Mozilla Campus Clubs Network, is an
              all student driven developers community located in the National
              Institute of Technology Patna. It is a community intended to
              provide a room for college students to learn and collaborate on a
              plethora of projects among themselves as well as with mentors.The
              club strives to build and improve the open sourcing environment
              and the coding culture of the whole city of Patna and eventually
              the whole state of Bihar. The will power and determination of each
              Developer, Competitive Coder, Designer and Innovative thinker is
              what governs our great community.
            </p> */}
            {/* <h1
              style={{ marginTop: `5vh`, width: `100%` }}
              className="abouthead"
              data-aos="zoom-in"
              data-aos-duration="300"
            >
              Where
            </h1>
            <p className="abouttxt" data-aos="zoom-in" data-aos-duration="300">
              The event will be conducted Online
            </p> */}
            <h1
              style={{ marginTop: `5vh`, width: `100%` }}
              className="abouthead"
              data-aos="zoom-in"
              data-aos-duration="300"
            >
              When
            </h1>
            <h4 className="abouttxt" data-aos="zoom-in" data-aos-duration="300">
              15 January 6:00PM to 18 January 6:00AM
            </h4>
          </div>
        </Aboutdiv>
      </>
    )
  }
}

export default About
