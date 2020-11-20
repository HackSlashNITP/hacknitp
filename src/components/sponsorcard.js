import React from "react"
import { Sponsorcarddiv } from "./style"

const Sponsorcard = props => {
  return (
    <Sponsorcarddiv className="d-flex justify-content-center align-items-center">
        <img
          src={props.url}
          alt=""
          className="img-fluid"
          style={{ maxHeight: `90%` }}
        />
    </Sponsorcarddiv>
  )
}

export default Sponsorcard
