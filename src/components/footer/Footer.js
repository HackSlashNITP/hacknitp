import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"
import logo from "../../images/hacknitplogo.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up">
        <div className="footer-up-left">
          <img src={logo} alt="" className="foot-logo" />
        </div>
        <div className="footer-up-right">
          <a
            href="https://rebrand.ly/hacknitp-4/rulebook"
            target="_blank"
            className="termNc"
            rel="noreferrer"
          >
            Rulebook
          </a>
          <a
            href="https://rebrand.ly/hackslash/community-guidelines"
            target="_blank"
            className="cnc"
            rel="noreferrer"
          >
            Code of conduct
          </a>
          <a
            href="https://rebrand.ly/hacknitp-4/reg/s-m"
            target="_blank"
            rel="noreferrer"
            className="cnc"
          >
            Apply as Mentor/Speaker
          </a>
          {/* <div><a target="_blank" className="discordbtnf" href="https://bit.ly/hacknitp-4-discord" rel='noreferrer'><button className="btn-primary btn-last">Join our Discord server</button></a></div> */}
        </div>
      </div>
      <div className="hr"></div>
      <div className="foot-bottom">
        <h4 className="foot-bottom-left">
          ©2022 HACKSLASH | All rights reserved
        </h4>
        <div className="foot-bottom-right">
          <Link
            to={{ pathname: "https://www.linkedin.com/company/hackslash" }}
            target="_blank"
            className="discordbtnf"
          >
            <i className="fab fa-linkedin socialm"></i>
          </Link>
          <Link
            to={{ pathname: "https://twitter.com/hackslash_nitp/" }}
            target="_blank"
            className="discordbtnf"
          >
            <i className="fab fa-twitter socialm"></i>
          </Link>
          <Link
            to={{
              pathname: "https://www.instagram.com/hackslash.nitp/?hl=en",
            }}
            target="_blank"
            className="discordbtnf"
          >
            <i className="fab fa-instagram socialm"></i>
          </Link>
          <Link
            to={{
              pathname: "https://www.youtube.com/c/HackSlashDevelopersClub/",
            }}
            target="_blank"
            className="discordbtnf"
          >
            <i className="fab fa-youtube socialm"></i>
          </Link>
          <Link
            to={{ pathname: "https://bit.ly/hacknitp-4-discord" }}
            target="_blank"
            className="discordbtnf"
          >
            <i className="fab fa-discord socialm"></i>
          </Link>
        </div>
      </div>
    </div>
    // https://www.instagram.com/hackslash.nitp/?hl=en
    // https://www.linkedin.com/company/hackslash
    // https://www.youtube.com/c/HackSlashDevelopersClub/
    // https://twitter.com/hackslash_nitp/
    // https://www.facebook.com/hackSlash.nitp/
  )
}

export default Footer
