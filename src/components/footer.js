import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterDiv } from "./style"
import hack from "../images/hacknitp.png"
import insta from "../images/insta.svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import fb from "../images/fb.svg"
import email from "../images/Email.svg"

import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
  render() {
    return (
        <>
        <FooterDiv>
            <div className="d-flex justify-content-center row">
                <div className="col-lg-4 col-md-6 text-sm-center text-md-left first">
                <div className="mb-5">
                    <img src={hack} className="img-fluid" alt="contact" />
                </div>
                <div className="mb-5">
                    <h6>
                    National Institute of Technology Patna, <br/>
                    Ashok Rajpath Road, Patna, <br/>
                    Bihar (800005), India </h6>
                </div>
                <div>
                    <img src={fb} className="img-fluid logo" alt="insta" />
                    <img src={twitter} className="img-fluid logo" alt="insta" />
                    <img src={linkedin} className="img-fluid logo" alt="insta" />
                    <img src={insta} className="img-fluid logo" alt="insta" />
                </div>
                </div>

                <div className="col-lg-4 col-md-6 text-sm-center text-md-left second">
                    <h2>Coordinators</h2> <br/>
                    <h4>Kumar Harsh</h4>
                    <h6>+91 6205572993</h6> <br/>
                    <h4>Parth Sharma</h4>
                    <h6>+91 9617704017</h6> <br/>
                    <h4>Prince Sinha</h4>
                    <h6>+91 9065967814</h6> <br/>
                    <h4>Raj Kothari</h4>
                    <h6>+91 9179904378</h6> <br/>
                </div>
                <div className="col-lg-4 col-md-6 text-sm-center text-lg-left third">
                    <i class="fab fa-facebook-f"></i>
                    <FontAwesomeIcon icon={faEnvelope} size="5x" />
                    <h1>Email</h1><br/>
                    <h3>hackslashclub@nitp.ac.in</h3>
                    </div>
                </div>
                <p align="right" className="copyright"> Copyright &copy; 2020. All rights reserved.</p>
      </FooterDiv>
      </>
    )
  }
}

export default Footer
