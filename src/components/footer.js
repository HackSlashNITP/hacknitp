import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hack from "../images/hacknitp.png"
import insta from "../images/insta.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import fb from "../images/fb.svg"

import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
            <div className="d-flex justify-content-center">
                <div className="container first">
                <div className="mb-5 display-4">
                    <img src={hack} className="img-fluid" alt="contact" />
                </div>
                <div className="mb-5">
                    <h5>
                    National Institute of Technology Patna, <br/>
                    Ashok Rajpath Road, Patna, <br/>
                    Bihar (800005), India </h5>
                </div>
                <div>
                    <img src={fb} className="img-fluid" alt="insta" />
                    <img src={twitter} className="img-fluid" alt="insta" />
                    <img src={linkedin} className="img-fluid" alt="insta" />
                    <img src={insta} className="img-fluid" alt="insta" />
                </div>
                </div>
                <div className="vline">
                </div>
                <div className="container second">
                    <h1>Coordinators</h1> <br/>
                    <h3>Kumar Harsh</h3>
                    <h5>+91 6205572993</h5> <br/>
                    <h3>Parth Sharma</h3>
                    <h5>+91 9617704017</h5> <br/>
                    <h3>Prince Sinha</h3>
                    <h5>+91 9065967814</h5> <br/>
                    <h3>Raj Kothari</h3>
                    <h5>+91 9179904378</h5> <br/>
                </div>
                <div className="container third">
                    <i class="fab fa-facebook-f"></i>
                    <FontAwesomeIcon icon={faEnvelope} size="5x" />
                    <h1>Email</h1><br/>
                    <h3>hackslashclub@nitp.ac.in</h3>
                    </div>
                </div>
                <p align="right" className="copyright"> Copyright &copy; 2020. All rights reserved.</p>
            </div>
      </>
    )
  }
}

export default Footer
