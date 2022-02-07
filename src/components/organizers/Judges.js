import React from 'react'
import OrganizerCard from './OrganizerCard'
import './Organizers.css'
// import img17 from '../../images/avatar.gif'
import img1 from '../../images/judges/Abhinav.jpeg'
import img2 from '../../images/judges/Akash.jpg'
import img3 from '../../images/judges/arko.jpeg'
import img4 from '../../images/judges/Dominic.png'
import img5 from '../../images/judges/kaustubh.jpg'
import img6 from '../../images/judges/ManishKumar.png'
import img7 from '../../images/judges/Sameer.png'
import img8 from '../../images/judges/Shreya.jpeg'
import img9 from '../../images/judges/Vinit.png'


const Judges = () => {

    const leads = [
        {
            name: 'Abhinav',
            role: '',
            logo: `${img1}`,
            linkedin: 'https://www.linkedin.com/in/mastersabh/',
            twitter: '',
            github: '',
        },
        {
            name: 'Akash Bajpai',
            role: ' ',
            logo: `${img2}`,
            linkedin: 'https://www.linkedin.com/in/akash4bajpai/',
            twitter: '',
            github: '',
        },
        {
            name: 'Arkodyuti Saha',
            role: '',
            logo: `${img3}`,
            linkedin: 'https://www.linkedin.com/in/arkodyutisaha/',
            twitter: '',
            github: ''
        },
        {
            name: 'Dominic Norton',
            role: ' ',
            logo: `${img4}`,
            linkedin: 'https://www.linkedin.com/in/dominiconorton/',
            twitter: '',
            github: '',
        },
        {
            name: 'Kaustubh Karkare',
            role: '',
            logo: `${img5}`,
            linkedin: 'https://www.linkedin.com/in/kaustubh-karkare/',
            twitter: '',
            github: 'https://github.com/kaustubh-karkare'
        },
        {
            name: 'Manish Kumar Vats',
            role: '',
            logo: `${img6}`,
            linkedin: 'https://www.linkedin.com/in/manish-kumar-vats',
            twitter: ' ',
            github: 'https://github.com/manish-Kumar-Vats/',
        },
        {
            name: 'Sammer Kashyap',
            role: '',
            logo: `${img7}`,
            linkedin: 'https://www.linkedin.com/in/sameer-kashyap-083a89184',
            twitter: '',
            github: 'https://github.com/Sameerkash',
        },
        {
            name: 'Shreya Singh',
            role: '',
            logo: `${img8}`,
            linkedin: 'https://www.linkedin.com/in/singh-shreya/',
            twitter: '',
            github: ' ',
        },
        {
            name: 'Vinit Shahdeo',
            role: '',
            logo: `${img9}`,
            linkedin: 'https://www.linkedin.com/in/vinitshahdeo/',
            twitter: '',
            github: 'https://github.com/vinitshahdeo',
        },
    ]

    return (
        <div>
            <h1 className="heading">
                Judges
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

export default Judges
