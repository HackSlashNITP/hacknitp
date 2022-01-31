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
            linkedin: 'https://www.linkedin.com/in/divyaprakashrx/',
            twitter: 'https://twitter.com/divyaprakashrx',
            github: 'https://github.com/divyaprakashrx'
        },
        {
            name: 'Akash Bajpai',
            role: ' ',
            logo: `${img2}`,
            linkedin: 'https://www.linkedin.com/in/paritoshkr/',
            twitter: 'https://twitter.com/heyparitosh',
            github: 'https://github.com/paritoshkr'
        },
        {
            name: 'Arko',
            role: '',
            logo: `${img3}`,
            linkedin: 'https://www.linkedin.com/in/amrit-raj-ba2a15190/',
            twitter: '',
            github: 'https://github.com/dev-amrit460'
        },
        {
            name: 'Dominic',
            role: ' ',
            logo: `${img4}`,
            linkedin: 'https://www.linkedin.com/in/neeraj-2212/',
            twitter: '',
            github: 'https://github.com/Neeraj2212'
        }, 
        {
            name: 'Kaustubh Karkare',
            role: '',
            logo: `${img5}`,
            linkedin: 'https://www.linkedin.com/in/shaguftaiqbal/',
            twitter: '',
            github: 'https://github.com/Shagufta08'
        },
        {
            name: 'Manish Kumar Vats',
            role: '',
            logo: `${img6}`,
            linkedin: 'https://www.linkedin.com/in/kumarsuraj23/',
            twitter: 'https://twitter.com/kumar_suraj_bit',
            github: 'https://github.com/kumarSuraj-bit'
        },
        {
            name: 'Sammer Kashyap',
            role: '',
            logo: `${img7}`,
            linkedin: 'https://www.linkedin.com/in/samriddhi-ambashta-8528a91ab/',
            twitter: '',
            github: 'https://github.com/samriddhiambashta'
        },
        {
            name: 'Shreya Singh',
            role: '',
            logo: `${img8}`,
            linkedin: 'https://www.linkedin.com/in/aditi-kumari-6219931a3/',
            twitter: '',
            github: 'https://github.com/aditikr257'
        },
       {
            name: 'Vinit Shahdeo',
            role: '',
            logo: `${img9}`,
            linkedin: 'https://www.linkedin.com/in/ayushman-sharma-2a9380196/',
            twitter: '',
            github: 'https://github.com/ayushman999'
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
