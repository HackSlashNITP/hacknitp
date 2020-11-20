import React from "react"
import ai from "../images/ai.svg"
import web from "../images/web.svg"
import game from "../images/game.svg"
import vr from "../images/vr.svg"
import android from "../images/android.svg"

class Stacks extends React.Component {
  render() {
    return (
      <>
        <div id="stacks">
          <div
            id="stacks"
            className="row d-flex justify-content-center stackrow"
          >
            <h1>Stacks</h1>
          </div>
          <div className="row d-flex justify-content-center stackrow">
            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
              <img
                src={web}
                data-aos="zoom-in"
                className="img-fluid"
                alt="web"
              />
            </div>
            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
              <img src={vr} data-aos="zoom-in" className="img-fluid" alt="VR" />
            </div>
            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
              <img src={ai} data-aos="zoom-in" className="img-fluid" alt="AI" />
            </div>
            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
              <img
                src={android}
                data-aos="zoom-in"
                className="img-fluid"
                alt="Android"
              />
            </div>
            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
              <img
                src={game}
                data-aos="zoom-in"
                className="img-fluid"
                alt="Game"
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Stacks
