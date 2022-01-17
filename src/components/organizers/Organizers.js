import React from 'react'
import OrganizerCard from './OrganizerCard'
import './Organizers.css'

import img17 from '../../images/avatar.gif'

const Organizers = () => {
    
    const leads = [
        {
            name: 'Lorem Ipsum',
            role: 'Lead Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/company/hackslash',
            twitter: 'https://www.facebook.com/hackSlash.nitp',
            github: 'https://www.linkedin.com/company/hackslash'
        },
        {
            name: 'Lorem Ipsum',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/company/hackslash',
            twitter: 'https://www.facebook.com/hackSlash.nitp',
            github: 'https://www.linkedin.com/company/hackslash'
        },
    ]
    
    return (
        <div>
            <h1 className="heading">
                <span className="white">
                   Leads
                </span>
            </h1>
             <div className="organizers-grid">
                {leads.map((data, index) => {
                    return (
                        <OrganizerCard logo={data.logo} key={index} name={data.name} role={data.role} linkedin={data.linkedin} twitter={data.twitter} github={data.github} />
                    )
                })}
             </div>
        </div>
    )
}

export default Organizers
