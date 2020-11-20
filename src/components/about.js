import React from "react"
import idea from "../images/bulb.svg"
import {Aboutdiv} from "./style"

class About extends React.Component {
  render() {
    return (
      <>
        <Aboutdiv>
          <div className="row d-flex justify-content-around" style={{ minHeight: `40vh` }}>
            <div className="col-md-5 col-sm-12 d-flex justify-content-center">
              <div className="row" style={{ marginTop: `5vh` }}>
                <h1
                  className="abouthead"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                >
                  About Us
                </h1>
                <p
                  className="abouttxt"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                >
                  National Institute of Technology Patna is the 18th National
                  Institute of Technology created by the Ministry of H.R.D.
                  Government of India after rechristening the erstwhile Bihar
                  College of Engineering Patna on 28. 01. 2004. NIT Patna marked
                  its humble beginning in 1886 with the establishment of
                  pleaders survey training school which was subsequently
                  promoted of Bihar College of Engineering Patna in 1924. This
                  made this institute the 6th Oldest Engineering Institute of
                  India. The graduate level curriculum was later elevated to the
                  post graduate level in 1978. The institute is situated on the
                  south bank of holy river Ganges behind Gandhi Ghat, one of the
                  most important and reverential place of Patna. The Gandhi Ghat
                  is associated with the immersion of ashes of father of the
                  Nation Mahatma Gandhi in the river Ganges. The campus has a
                  picturesque river view with historic building presenting a
                  spectacle of architectural delight and natural beauty.
                  <br />
                  <br />
                  National Institute of Technology Patna has been declared as an
                  Institute of National Importance and has been granted a fully
                  Autonomous Status by MHRD, Government of India. The Institute
                  has also been declared as a Centre of Excellence of impart
                  high level education training , research and development in
                  science, engineering technology and humanities. It is
                  imparting high quality education & values at UG (B.Tech), PG
                  (M.Tech) & Ph .D programmes through its experienced faculty
                  well versed in their respective field of engineering an
                  technology with well equipped laboratories . At present the
                  Institute has seven disciplines viz. Architecture, Civil
                  Engineering, Compute Science & Engg., Electrical Engg.,
                  Electronics & Communication Engg., Information Technology and
                  Mechanical Engg., and well established departments of physics,
                  Mathematics and Humanities and Social Science.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 d-flex justify-content-center flex-column">
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
                  The hack is only a small part of the competition. The real
                  spirit lies in building your network in the growing tech
                  community and collaborating with some of the finest minds of
                  the nation. Just remember, taking the Hackathons too seriously
                  defeats the purpose. Save the seriousness for pitching to
                  investors. Keeping an open mind will open new doors, help
                  build new relationships and acquire new skills.This is
                  hackNITP.
                </p>

                <h1
                  style={{ marginTop: `5vh`, width: `100%` }}
                  className="abouthead"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                >
                  Where
                </h1>
                <p
                  className="abouttxt"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                >
                  The event will be conducted Online
                </p>
                <h1
                  style={{ marginTop: `5vh`, width: `100%` }}
                  className="abouthead"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                >
                  When
                </h1>
                <p
                  className="abouttxt"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                >
                  Saturday to Sunday 16-17 January 2021
                </p>
              </div>
            </div>
          </div>
        </Aboutdiv>
      </>
    )
  }
}

export default About
