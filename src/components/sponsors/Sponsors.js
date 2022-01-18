import React from "react"
// import { Link } from 'react-router-dom'
import SponsorBP from "./SponsorBP"
import "./Sponsors.css"
import Organiser from "../organiser/Organiser"
import logo from "../../images/hacknitp.png"
import logo1 from "../../images/gdsc.png"
import digital from "../../images/DIGITAL_OCEAN.png"
import devfolio from "../../images/devfolio.png"
import tezos from "../../images/tezos.png"
import filecoin from "../../images/filecoin.png"
import polygon from "../../images/polygon.png"
import celo from "../../images/celo.png"
import echo from "../../images/echo.png"
import interview from "../../images/interview-cake.jpg"
import voiceflow from "../../images/Voiceflow.png"
import clerky from "../../images/Clerky.png"
import Axure from "../../images/axure.jpg"
import Taskade from "../../images/taskade.png"
import gfg from "../../images/gfg.png"
import gmc from "../../images/gmc.png"
import postman from "../../images/postman.png"

const Sponsors = () => {
  const title = [
    {
      logo: `${digital}`,
      link: "https://www.digitalocean.com/",
    },
  ]

  const associate = [
    {
      logo: `${devfolio}`,
      link: "https://devfolio.co/",
    },
    {
      logo: `${tezos}`,
      link: "https://tezos.com/",
    },
    {
      logo: `${filecoin}`,
      link: "https://filecoin.io/",
    },
    {
      logo: `${polygon}`,
      link: "https://polygon.technology/",
    },
    {
      logo: `${celo}`,
      link: "https://celo.org/",
    },
    {
      logo: `${postman}`,
      link: "https://www.postman.com/",
    },
  ]

  const subEvent = [
    {
      logo: `${echo}`,
      link: "https://www.echo3d.co/",
    },
    {
      logo: `${interview}`,
      link: "https://www.interviewcake.com/",
    },
    {
      logo: `${voiceflow}`,
      link: "https://www.voiceflow.com/",
    },
    {
      logo: `${clerky}`,
      link: "https://www.clerky.com/",
    },
    {
      logo: `${Axure}`,
      link: "https://www.axure.com/",
    },
    {
      logo: `${Taskade}`,
      link: "https://www.taskade.com/",
    },
    {
      logo: `${gfg}`,
      link: "https://www.geeksforgeeks.org/",
    },
  ]

  const certifications = [
    {
      logo: `${gmc}`,
      link: "https://givemycertificate.com/",
    },
  ]

  const data = [
    {
      name: "HackSlash Club",
      logo: `${logo}`,
      facebook: "https://www.facebook.com/hackSlash.nitp",
      insta: "https://www.instagram.com/hackslash.nitp",
      linkedin: "https://www.linkedin.com/company/hackslash",
      desc: "HackSlash Developer Club, NIT Patna is a community intended to provide a room for college students to learn and collaborate on a plethora of projects among themselves as well as with mentors. It is open for every student, ranging from novice developers who are just starting, to advanced developers who want to further enhance their skills.",
    },
    {
      name: "GDSC NIT Patna",
      logo: `${logo1}`,
      facebook: "https://www.facebook.com/gdscnitp",
      insta: "https://www.instagram.com/gdscnitp",
      linkedin: "https://www.linkedin.com/company/gdscnitp",
      desc: "Google Developer Student Clubs NIT Patna is local community group of NIT Patna college students interested in Google developer technologies. The GDSC organizes numerous events ranging from small meetups for working on projects to large-scale hackathons.",
    },
  ]

  return (
    <div>
      <h1 className="heading">
        <span className="white">SPONSORS \ </span> PARTNERS
      </h1>

      <h2 className="level2-heading platinum">Title Sponsor</h2>
      <div className="platinum-cont">
        <SponsorBP link={title[0].logo} key="69" add={title[0].link} />
      </div>
      <h2 className="level2-heading gold">Associate Sponsor</h2>
      <div className="platinum-cont">
        {associate.map((data, index) => {
          return <SponsorBP link={data.logo} key={index} add={data.link} />
        })}
      </div>
      <h2 className="level2-heading silver">Sub-Event Sponsor</h2>
      <div className="platinum-cont">
        {subEvent.map((data, index) => {
          return <SponsorBP link={data.logo} key={index} add={data.link} />
        })}
      </div>
      <h2 className="level2-heading silver">Certificate Sponsor</h2>
      <div className="platinum-cont">
        {certifications.map((data, index) => {
          return <SponsorBP link={data.logo} key={index} add={data.link} />
        })}
      </div>
      <br></br>
      <br></br>
      <div>
        <h1 className="heading">
          <span className="white">Lead </span> Organizer
        </h1>
        <br />
        <Organiser
          name={data[0].name}
          logo={data[0].logo}
          desc={data[0].desc}
          facebook={data[0].facebook}
          insta={data[0].insta}
          linkedin={data[0].linkedin}
        />
        <br />
        <h1 className="heading">
          <span className="white">Community </span> Partner
        </h1>
        <br />
        <Organiser
          name={data[1].name}
          logo={data[1].logo}
          desc={data[1].desc}
          facebook={data[1].facebook}
          insta={data[1].insta}
          linkedin={data[1].linkedin}
        />
        <br />
      </div>

      <div className="enquire-sponsors-cont" data-aos="fade-up">
        <h1 className="heading">
          <span className="white">Want to Sponsor us?</span>
        </h1>
        <p className="last-yr-sponsors">
          <a
            href="https://hacknitp.netlify.app/#sponsors"
            target="_blank"
            rel="noreferrer"
          >
            Click here to see our last year sponsors
          </a>
          <i className="fab fa-send"></i>
        </p>
        <h3 className="heading">
          <span className="white">
            Contact us at{" "}
            <a href="mailto:hackslashclub@nitp.ac.in" className="mail-id">
              {" "}
              hackslashclub@nitp.ac.in
            </a>
          </span>
        </h3>
        {/* <div className="sponsor-brochure-btn dnld-sponsor-broc">
                     <button className='btn-primary'>Download Sponsor Brochure</button>
                 </div> */}
      </div>
    </div>
  )
}

export default Sponsors
