import React from "react"
import "./theme.css"

import { ThemeData } from "./themeData"

function ThemeImg(props) {
  return (
    <div className="col-md-4 col-sm-12 d-flex justify-content-center theme">
      <img
        src={props.imgsrc}
        data-aos="zoom-in"
        className="img-fluid"
        alt={props.text}
      />
      <div className="theme-content">
        <p>{props.text}</p>
      </div>
    </div>
  )
}

class Themes extends React.Component {
  render() {
    return (
      <>
        <div id="stacks">
          <div
            id="stacks"
            className="row  d-flex justify-content-center stackrow pt-5 "
          >
            <h1>Themes</h1>
          </div>
          <div className="row  justify-content-center stackrow">
            {ThemeData.map(ThemeImg)}
          </div>
        </div>
      </>
    )
  }
}

export default Themes
