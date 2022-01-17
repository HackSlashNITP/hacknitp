import React from 'react'
import './Organizers.css'

const OrganizerCard = (props) => {
    return (
        <div className='organizer-card' data-aos="fade-up">
            <div className="animation-circle">
            </div>
            <div className="org-img">
                <img src={props.logo} alt={props.name} className='person-img'/>
            </div>
            <p className="person-name">
                {props.name}
            </p>
            <h4 className="person-post">
                {props.role}
            </h4>
            <div className="socials">
                <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href={props.twitter} target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                <a href={props.github} target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
        </div>
    )
}

export default OrganizerCard
