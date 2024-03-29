import React from "react";
import "./Instructions.css";
const Instructions = () => {
  return (
    <div>
      <div id="Instructions" className="prize-container">
        <h1 className="heading">INSTRUCTIONS</h1>
        <ul data-aos="fade-up">
          <li className="list-item">
            The 48 hours online hackathon would be live on 11/02/2022 at 18:00
            IST / 12:30 GMT till 13/02/2022 at 18:00 IST / 12:30 GMT.
          </li>
          <li className="list-item">
            The registration for the event is absolutely free of cost, implying
            there is no registration fee.
          </li>
          <li className="list-item">
            To participate in the hackathon, register through{" "}
            <a
              className="devt"
              href="https://hacknitp-4.devfolio.co/."
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Devfolio.
            </a>
          </li>
          <li className="list-item">
            The competition is open for teams comprising of students currently
            enrolled in any educational institution.
          </li>
          <li className="list-item">
            The hackathon allows a maximum of four members in a team, for
            participation in the hackathon.
          </li>
          <li className="list-item">
            Participants are allowed to form a team with members from
            educational institutions other than where they are enrolled in. That
            is, a team may have members from multiple educational institutions.
          </li>
        </ul>
        <div className="instructions-btn">
          <a
            className="button btn-secondary instructions"
            href="https://rebrand.ly/hacknitp-4/rulebook"
            target="_blank"
            rel="noreferrer"
          >
            View Full Instructions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
