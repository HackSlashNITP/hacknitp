import React from "react"
import "./NavB.css"
import logo from "../../images/hacknitplogo.svg"
const NavB = () => {
  function handleMenu(e) {
    e.preventDefault()
    document.querySelector(".popup").classList.toggle("popup-open")
  }
  return (
    <div className="nav-bar">
      <div className="popup">
        <div className="cut-btn-flex" onClick={handleMenu}>
          <i className="fas fa-times popup-cut-btn"></i>
        </div>
        <nav className="stroke">
          <ul className="nav-mob">
            <li>
              <a href="/" rel="noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" rel="noreferrer">
                About
              </a>
            </li>
            <li>
              <a href="#tracks" rel="noreferrer">
                Themes
              </a>
            </li>
            <li>
              <a href="#contact" rel="noreferrer">
                Contact
              </a>
            </li>
            <li>
              <a href="#faq" rel="noreferrer">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://rebrand.ly/hacknitp-4/reg/s-m"
                target="_blank"
                rel="noreferrer"
              >
                Apply as Mentor
              </a>
            </li>
            <li>
              <a
                href="https://rebrand.ly/hacknitp-4/reg/ca"
                target="_blank"
                rel="noreferrer"
              >
                CA
              </a>
            </li>
          </ul>
          <div>
            <a
              target="_blank"
              className="discordbtnf"
              href="https://hacknitp-4.devfolio.co"
              rel="noreferrer"
            >
              <div className="disc-btn">
                <button className="btn btn-primary">Register</button>
              </div>
            </a>
          </div>
        </nav>
      </div>
      <div className="navbar2">
        <div className="nav-jack">
          <img src={logo} alt="" className="njack-logo" />
        </div>
        <div className="right">
          <nav className="stroke">
            <ul>
              <li>
                <a href="/" rel="noreferrer">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" rel="noreferrer">
                  About
                </a>
              </li>
              <li>
                <a href="#tracks" rel="noreferrer">
                  Themes
                </a>
              </li>
              <li>
                <a href="#contact" rel="noreferrer">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" rel="noreferrer">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#navbar-prizes" rel="noreferrer">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#navbar-sponsers" rel="noreferrer">
                  Sponsers
                </a>
              </li>
              {/* <li>
                <a
                  href="https://rebrand.ly/hacknitp-4/reg/s-m"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply as Mentor
                </a>
              </li>
              <li>
                <a
                  href="https://rebrand.ly/hacknitp-4/reg/ca"
                  target="_blank"
                  rel="noreferrer"
                >
                  CA
                </a>
              </li> */}
            </ul>
            <div>
              <a
                target="_blank"
                className="discordbtnf"
                href="https://hacknitp-4.devfolio.co"
                rel="noreferrer"
              >
                <div className="disc-btn">
                  <button className="btn btn-primary">Register</button>
                </div>
              </a>
            </div>
          </nav>
        </div>
        <div className="right-alt">
          <i className="fas fa-bars" onClick={handleMenu}></i>
        </div>
      </div>
    </div>
  )
}

export default NavB
