import React from 'react'
import OrganizerCard from './OrganizerCard'
import './Organizers.css'

import img1 from "../../images/Mentors/Dipanwita.jpeg"
import img2 from "../../images/Mentors/neel.jpeg"
import img3 from "../../images/Mentors/tanya.jpeg"
import img4 from "../../images/Mentors/shrankala.jpg"
import img5 from "../../images/Mentors/kanchi.jpg"
import img6 from "../../images/Mentors/aditya.png"
import img7 from "../../images/Mentors/jas.jpeg"
import img8 from "../../images/Mentors/awantika.jpeg"
import img9 from "../../images/Mentors/asmitVimal.jpeg"
import img10 from "../../images/Mentors/adityaGupta.jpeg"
import img11 from "../../images/Mentors/Vividha.jpeg"


const Mentors = () => {

    const leads = [
        {
            name: 'Aditya Gupta',
            role: '',
            des:'',
            logo: `${img10}`,
            linkedin: 'https://www.linkedin.com/in/adityagupta150/',
            twitter: '',
            github: 'https://github.com/adi-g15'
        },
        {
            name: 'Aditya Kumar Singh',
            role: '',
            des:'',
            logo: `${img6}`,
            linkedin: 'https://www.linkedin.com/in/aditya-singh-847082175/',
            twitter: '',
            github: ''
        },
        {
            name: 'Asmit Vimal',
            role: '',
            des:'',
            logo: `${img9}`,
            linkedin: 'https://www.linkedin.com/in/asmit-vimal-415719199',
            twitter: '',
            github: 'https://github.com/ViAsmit'
        },
        {
            name: 'Awantika Nigam',
            role: '',
            des:'',
            logo: `${img8}`,
            linkedin: 'https://www.linkedin.com/in/awantika-nigam',
            twitter: '',
            github: 'https://github.com/awantika10'
        },
        {
            name: 'Dipanwita Guhathakurta',
            role: '',
            des:'',
            logo: `${img1}`,
            linkedin: 'https://www.linkedin.com/in/dipanwita-guhathakurta-408ab1178/',
            twitter: '',
            github: 'https://github.com/susiejojo'
        },
        {
            name: 'Jaskirat Singh',
            role: '',
            des:'',
            logo: `${img7}`,
            linkedin: 'https://www.linkedin.com/in/jaskirat-singh-009348178/',
            twitter: '',
            github: 'https://github.com/Jas-Script'
        },
        {
            name: 'Kanchi Jain',
            role: '',
            des:'',
            logo: `${img5}`,
            linkedin: 'https://www.linkedin.com/in/kanchi-jain-6475881b5',
            twitter: '',
            github: ''
        },
        {
            name: 'Neel Shah',
            role: '',
            des:'',
            logo: `${img2}`,
            linkedin: 'https://www.linkedin.com/in/neel-shah-07460218a/',
            twitter: '',
            github: 'https://github.com/neelshah2409'
        },
        {
            name: 'Shrankhla Srivastava',
            role: '',
            des:'',
            logo: `${img4}`,
            linkedin: 'https://www.linkedin.com/in/shrankhla-srivastava-igdtuw',
            twitter: '',
            github: ''
        },
        {
            name: 'Tanya Rajhans',
            role: '',
            des:'',
            logo: `${img3}`,
            linkedin: 'https://www.linkedin.com/in/tanyarajhans/',
            twitter: '',
            github: 'https://github.com/tanyarajhans'
        },
       
        {
            name: 'Vividha Rawat',
            role: '',
            des:'',
            logo: `${img11}`,
            linkedin: 'https://www.linkedin.com/in/vividharawat/',
            twitter: '',
            github: 'https://github.com/V2dha'
        },
        
    ]

    return (
        <div>
            <h1 className="heading">
                Mentors
            </h1>
            <div className="organizers-grid">
                {leads.map((data, index) => {
                    return (
                        <OrganizerCard logo={data.logo} key={index} name={data.name} role={data.role} des={data.des} linkedin={data.linkedin} twitter={data.twitter} github={data.github} />
                    )
                })}
            </div>
        </div>
    )
}

export default Mentors
