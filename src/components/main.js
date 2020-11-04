import React from "react"
import hacker from "../images/hacker.svg"
import maintext from "../images/maintext.svg"
import bulb from "../images/idea.svg"
import stack from "../images/stack.svg"

const Main = () => {
  return (
    <>
      <div className="row d-flex align-items-center">
        <img className="img-fluid bulb" src={bulb} alt=" " />
        <img className="img-fluid stack" src={stack} alt=" " />
        <div
          className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center"
        >
          <div className="row" style={{ marginTop: `10vh` }}>
            <img src={maintext} className="img-fluid" alt="HackNitp 3.0" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div className="row" style={{ marginTop: `10vh` }}>
            <img src={hacker} className="img-fluid" alt=" " />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center" style={{ marginTop: `6vh` }}>
          <h3 className="htext"
          >
            The one that hacker craves for is on its way.....
          </h3>
        </div>
      </div>
    </>
  )
}

export default Main
