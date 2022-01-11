import React from 'react'

const SponsorBP = (props) => {
    return (
        <div className='sponsor-bp' data-aos="fade-up">
            <img src={props.link} alt="sponsor-logo" className="sponsor-logo" />
        </div>
    )
}

export default SponsorBP
