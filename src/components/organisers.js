import React from "react"
import { Organiserdiv } from "./style"
import Organizerlist from "../shared/organizerlist"
import Organizercard from "./organizercard"
class Organizers extends React.Component {
  render() {
    return (
      <>
        <Organiserdiv id="organizer">
          <div className="row d-flex justify-content-center">
            <h1>Organizers</h1>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {Organizerlist.map(elem => {
                return (
                  <div
                    style={{
                      display: `flex`,
                      justifyContent: `center`,
                      alignItems: `center`,
                      flexDirection: `column`,
                    }}
                  >
                    <Organizercard
                      url={elem.img}
                      linkedin={elem.linkedin}
                      facebook={elem.facebook}
                      instagram={elem.instagram}
                    />
                    <h4 style={{ color: `#ffffff`, fontFamily: `Poppins` }}>
                      {elem.name}
                    </h4>
                    <h5 style={{ color: `#2286e0`, fontFamily: `Poppins` }}>
                      {elem.desg}
                    </h5>
                  </div>
                )
              })}
            </div>
          </div>
        </Organiserdiv>
      </>
    )
  }
}

export default Organizers
