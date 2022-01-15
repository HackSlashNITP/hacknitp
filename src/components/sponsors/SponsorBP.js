import React from 'react'
import { Link } from 'react-router-dom'

const SponsorBP = (props) => {
    return (
        <Link to={{ pathname: props.add }} target="_blank" >
            <div className='sponsor-bp' data-aos="fade-up">
                <img src={props.link} alt="sponsor-logo" className="sponsor-logo" />
            </div>
        </Link >
    )
}

export default SponsorBP
