// import React, { useEffect } from 'react'
import "./Timeline.css"
// import AOS from 'aos';
import "aos/dist/aos.css"

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1 className="heading">EVENT SCHEDULE</h1>
      <div className="timeline">
        <div className="outer">
          <div className="card" data-aos="fade-up">
            <div className="info">
              <h3 className="title">15 January, 21:00 IST / 15:30 GMT</h3>
              <p className="timeline-des">Hackathon registration starts.</p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="info">
              <h3 className="title">3 February, 18:00 IST / 12:30 GMT</h3>
              <p className="timeline-des">Info Session</p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="info">
              <h3 className="title">4 February</h3>
              <p className="timeline-des">Workshop series starts.</p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="info">
              <h3 className="title">10 February</h3>
              <p className="timeline-des">Workshop series ends.</p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="info">
              <h3 className="title">10 February, 21:00 IST / 15:30 GMT</h3>
              <p className="timeline-des">Hackathon registration ends.</p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="info">
              <h3 className="title">11 February, 16:00 IST / 10:30 GMT</h3>
              <p className="timeline-des">Opening Ceremony.</p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="info">
              <h3 className="title">11 February, 18:00 IST / 12:30 GMT</h3>
              <p className="timeline-des">Hackathon Starts.</p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="info">
              <h3 className="title">13 February, 18:00 IST / 12:30 GMT</h3>
              <p className="timeline-des">Hackathon Ends.</p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="info">
              <h3 className="title">20 February, 18:00 IST / 12:30 GMT</h3>
              <p className="timeline-des">Closing Ceremony.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
