import React from 'react'
import OrganizerCard from './OrganizerCard'
import './Organizers.css'
// import img17 from '../../images/avatar.gif'
import img1 from '../../images/Speakers/Akash.jpg'
import img2 from '../../images/Speakers/arko.jpeg'
import img3 from '../../images/Speakers/krishNaik.jpeg'
import img4 from '../../images/Speakers/ShivamJha.jpeg'
import img5 from '../../images/Speakers/kirtiGera.jpeg'

const Speakers = () => {

    const leads = [
        {
            name: 'Akash Bajpai',
            role: '',
            logo: `${img1}`,
            linkedin: 'https://www.linkedin.com/in/akash4bajpai/',
            twitter: '',
            github: ''
        },
        {
            name: 'Arkodyuti Saha',
            role: '',
            logo: `${img2}`,
            linkedin: 'https://www.linkedin.com/in/arkodyutisaha/',
            twitter: '',
            github: ''
        },
        // {
        //     name: 'Krish Naik',
        //     role: '',
        //     logo: `${img3}`,
        //     linkedin: 'https://www.linkedin.com/in/naikkrish/',
        //     twitter: '',
        //     github: ''
        // },
        {
            name: 'Shivam Jha',
            role: '',
            logo: `${img4}`,
            linkedin: 'http://www.linkedin.com/in/shivam-jha-78421592',
            twitter: '',
            github: ''
        },
        {
            name: 'Kirti Gera',
            role: '',
            logo: `${img5}`,
            linkedin: 'https://www.linkedin.com/in/kirti-gera/',
            twitter: '',
            github: ''
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
