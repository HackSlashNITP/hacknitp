// import React, { useEffect } from 'react'
import './Timeline.css';
// import AOS from 'aos';
import "aos/dist/aos.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h1 className="heading">EVENT SCHEDULE</h1>
      <div class="timeline">
        <div class="outer">
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">13 January, 18:00 IST</h3>
              <p className='timeline-des'>
                Hackathon registration starts.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">3 February, 18:00 IST</h3>
              <p className='timeline-des'>
                Info Session
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">4 February 18:00 IST</h3>
              <p className='timeline-des'>
                Workshop series ends.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">10 February, 18:00 IST</h3>
              <p className='timeline-des'>
                Hackathon registration ends.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">11 Febraury, 16:00 IST</h3>
              <p className='timeline-des'>
                Opening Ceremony.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">11 Febraury, 18:00 IST</h3>
              <p className='timeline-des'>
                Hackathon Starts.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">13 Febraury, 18:00 IST</h3>
              <p className='timeline-des'>
                Hackathon Ends.
              </p>
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="info">
              <h3 class="title">20 Febraury, 18:00 IST</h3>
              <p className='timeline-des'>
                Closing Ceremony.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
