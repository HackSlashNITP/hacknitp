import React, { useEffect } from "react"
// import { Link } from 'react-router-dom'
import "./Homepage.css"
import hacknitp4 from "../../images/HackNitp-4.0.svg"
import gameon from "../../images/game-on.svg"
import Timer from "../timer/Timer"
import discord from "../../images/discord.svg"
import NavB from "../navbar2/NavB"
import Prizes from "../prizes/Prizes"
import Tracks from "../tracks/Tracks"
import Timeline from "../timeline/Timeline"
import Instructions from "../instructions/Instructions"
import Organizers from "../organizers/Organizers"
import Judges from "../organizers/Judges"
import Speakers from "../organizers/Speakers"
import Sponsors from "../sponsors/Sponsors"
import Contact from "../contact/Contact"
import Faq from "../faq/Faq"
import Footer from "../footer/Footer"
import Intro from "../intro/Intro"
import Mentors from "../organizers/Mentors"
// import Organizer from "../organiser/Organiser"
// import Tabs from "../Tabs/tabs";
import AOS from "aos"

import "aos/dist/aos.css"
// import apply from '../../images/apply.png'

const HomePage = () => {
  useEffect(() => {
    AOS.init({ once: true })
    // AOS.refresh()
  }, [])
  React.useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://apply.devfolio.co/v2/sdk.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  const btnstyle = {
    height: "38px",
    width: "201px",
  }
  return (
    <div className="body">
      <div className="home-body">
        <NavB />
        <div className="home-body-bg" data-aos="fade-up">
          <div className="home-left">
            <img src={hacknitp4} className="hack-old" alt="hacknitp" />
            <h3 className="home-date">February 11,2022 - February 13,2022</h3>
            <p className="home-para">
              A Hackathon is not merely a competition but a place where people
              learn the art of solving problems, make friends, build their
              network, and have fun. You learn how to work collaboratively in a
              team to build a hack. Let the innovation inside you flourish at
              HackNITP 4.0 and turn the craziest of your ideas into a reality.
            </p>
            <div className="home-btns headline">
              <div
                className="apply-button"
                data-hackathon-slug="hacknitp-4"
                data-button-theme="dark"
                style={btnstyle}
              ></div>
              <div>
                <a
                  href="https://bit.ly/hacknitp-4-discord"
                  target="_blank"
                  className="discordbtn"
                  rel="noreferrer"
                >
                  <button className="btn-secondary" id="fix">
                    <span>Join Discord</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="home-right">
            <img src={gameon} alt="game-on" className="game-on" />
          </div>
        </div>
      </div>
      <Intro />
      <Timer />
      <Judges />
      
      <Speakers />
      <Mentors />
      <Tracks />
      <Prizes />
      <Instructions />
      
      <Timeline />
      <Sponsors />
      <Organizers />
      <Faq />
      <Contact />
      <Footer />
      <a
        href="https://bit.ly/hacknitp-4-discord"
        rel="noreferrer"
        style={{ position: `fixed`, bottom: 0, right: 0, zIndex: 10 }}
        target="_blank"
      >
        <img src={discord} alt="join discord" />
      </a>
    </div>
  )
}

export default HomePage
