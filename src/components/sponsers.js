import React from "react"
import { Sponsordiv, SponserHead } from "./style"
import Sponsorcard from "./sponsorcard"
import { GoldSponsors, SilverSponsers, Patrons } from "../shared/sponsorlist"
class Sponsers extends React.Component {
  render() {
    return (
      <>
        <Sponsordiv id="sponsors">
          <div className="row d-flex justify-content-center">
            <h1 style={{ fontSize: `4rem` }}>Sponsors</h1>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <SponserHead color="gold">Gold Sponsers</SponserHead>
            </div>
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {GoldSponsors.map(elem => {
                return (
                  <Sponsorcard url={elem.img} link={elem.link} type={`gold`} />
                )
              })}
            </div>
            <div className="row d-flex justify-content-center">
              <SponserHead color="silver">Silver Sponsers</SponserHead>
            </div>
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {SilverSponsers.map(elem => {
                return (
                  <Sponsorcard
                    url={elem.img}
                    link={elem.link}
                    type={`silver`}
                  />
                )
              })}
            </div>
            <div className="row d-flex justify-content-center">
              <SponserHead color="#b08d57">Patrons</SponserHead>
            </div>
            <div className="row d-flex justify-content-around align-items-center stackrow">
              {Patrons.map(elem => {
                return (
                  <Sponsorcard
                    url={elem.img}
                    link={elem.link}
                    type={`patrons`}
                  />
                )
              })}
            </div>
          </div>
        </Sponsordiv>
      </>
    )
  }
}

export default Sponsers
