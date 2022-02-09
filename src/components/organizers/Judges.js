import React from 'react'
import OrganizerCard from './OrganizerCard'
import './Organizers.css'
// import img17 from '../../images/avatar.gif'
import img1 from '../../images/judges/Abhinav.jpeg'
import img2 from '../../images/judges/Akash.jpg'
import img3 from '../../images/judges/Ameer Jhan.jpg'
import img4 from '../../images/judges/Dominic.png'
import img5 from '../../images/judges/kaustubh.jpg'
import img6 from '../../images/judges/ManishKumar.png'
import img7 from '../../images/judges/Sameer.png'
import img8 from '../../images/judges/Shreya.jpeg'
import img9 from '../../images/judges/Vinit.png'
import img10 from '../../images/judges/MadhavBahl.jpeg'
import img11 from '../../images/judges/Kaustubh.jpeg'


const Judges = () => {

    const leads = [
        {
            name: 'Kaustubh Karkare',
            role: 'Senior Software Engineer / Tech Lead',
            logo: `${img5}`,
            linkedin: 'https://www.linkedin.com/in/kaustubh-karkare/',
            twitter: '',
            github: 'https://github.com/kaustubh-karkare'
        },
        
        {
            name: 'Vinit Shahdeo',
            role: 'Software Engineer II',
            logo: `${img9}`,
            linkedin: 'https://www.linkedin.com/in/vinitshahdeo/',
            twitter: '',
            github: 'https://github.com/vinitshahdeo',
        },
        {
            name: 'Abhinav',
            role: 'Software Development Engineer',
            logo: `${img1}`,
            linkedin: 'https://www.linkedin.com/in/mastersabh/',
            twitter: '',
            github: '',
        },
        {
            name: 'Shreya Singh',
            role: 'Software Development Engineer',
            logo: `${img8}`,
            linkedin: 'https://www.linkedin.com/in/singh-shreya/',
            twitter: '',
            github: ' ',
        },
        {
            name: 'Dominic Norton',
            role: 'Product Manager',
            logo: `${img4}`,
            linkedin: 'https://www.linkedin.com/in/dominiconorton/',
            twitter: '',
            github: '',
        },
        {
            name: 'Ameer Jhan',
            role: 'Senior Software Development Engineer',
            logo: `${img3}`,
            linkedin: 'https://www.linkedin.com/in/ameerthehacker/',
            twitter: '',
            github: 'https://github.com/ameerthehacker'
        },
        {
            name: 'Madhav Bahl',
            role: 'Software Engineer',
            logo: `${img10}`,
            linkedin: 'https://www.linkedin.com/in/madhavbahl/',
            twitter: '',
            github: 'https://github.com/MadhavBahl',
        },
        {
            name: 'Akash Bajpai',
            role: 'Associate Software Engineer',
            logo: `${img2}`,
            linkedin: 'https://www.linkedin.com/in/akash4bajpai/',
            twitter: '',
            github: '',
        },
        {
            name: 'Manish Kumar Vats',
            role: 'Android Developer',
            logo: `${img6}`,
            linkedin: 'https://www.linkedin.com/in/manish-kumar-vats',
            twitter: ' ',
            github: 'https://github.com/manish-Kumar-Vats/',
        },
        
        {
            name: 'Kaustubh Maske Patil',
            role: 'Co-Founder',
            logo: `${img11}`,
            linkedin: 'https://www.linkedin.com/in/kaustubh42/',
            twitter: '',
            github: 'https://github.com/nikochiko',
        },
        
        {
            name: 'Sameer  Kashyap',
            role: 'Software Engineer',
            logo: `${img7}`,
            linkedin: 'https://www.linkedin.com/in/sameer-kashyap-083a89184',
            twitter: '',
            github: 'https://github.com/Sameerkash',
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
