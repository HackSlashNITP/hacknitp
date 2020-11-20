import React from "react"
import {Sponsordiv} from "./style"
import Sponsorcard from "./sponsorcard"
import Sponsorlist from "./sponsorlist"
class Sponsers extends React.Component {
  render() {
    return (
      <>
        <Sponsordiv>
          <div className="row d-flex justify-content-center sponserrow">
            <h1>Sponsors</h1>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {
                Sponsorlist.map(elem=>{
                  return(
                    <Sponsorcard url={elem.img} link={elem.link} />
                  )
                })
              }
            </div>
          </div>
        </Sponsordiv>
      </>
    )
  }
}

export default Sponsers
