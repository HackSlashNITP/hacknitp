import React from 'react'
import OrganizerCard from './OrganizerCard'
import './Organizers.css'
// import img17 from '../../images/avatar.gif'
import img1 from '../../images/organizer/divyaprakash.jpg'
import img2 from '../../images/organizer/paritosh-2.jpg'
import img3 from '../../images/organizer/amritraj.jpg'
import img4 from '../../images/organizer/neerajpatil.jpg'

const Speakers = () => {

    const leads = [
        {
            name: 'Akash Bajpai',
            role: '',
            logo: `${img1}`,
            linkedin: 'https://www.linkedin.com/in/divyaprakashrx/',
            twitter: 'https://twitter.com/divyaprakashrx',
            github: 'https://github.com/divyaprakashrx'
        },
        {
            name: 'Arkodyuti Saha',
            role: '',
            logo: `${img2}`,
            linkedin: 'https://www.linkedin.com/in/paritoshkr/',
            twitter: 'https://twitter.com/heyparitosh',
            github: 'https://github.com/paritoshkr'
        },
        {
            name: 'Krish Naik',
            role: '',
            logo: `${img3}`,
            linkedin: 'https://www.linkedin.com/in/amrit-raj-ba2a15190/',
            twitter: '',
            github: 'https://github.com/dev-amrit460'
        },
        {
            name: 'GFG',
            role: '',
            logo: `${img4}`,
            linkedin: 'https://www.linkedin.com/in/neeraj-2212/',
            twitter: '',
            github: 'https://github.com/Neeraj2212'
        },
    ]

    return (
        <div>
            <h1 className="heading">
                Speakers
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

export default Speakers
