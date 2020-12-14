import React from "react"
import { Sponsorcarddiv } from "./style"

const Sponsorcard = props => {
  return (
    <Sponsorcarddiv className="d-flex justify-content-center align-items-center">
      <a target="_blank" style={{ maxHeight: `90%` }} href={props.link}>
        <img
          src={props.url}
          alt=""
          className="img-fluid"
          data-aos="zoom-in"
          data-aos-duration="300"
        />
      </a>
    </Sponsorcarddiv>
  )
}

export default Sponsorcard
