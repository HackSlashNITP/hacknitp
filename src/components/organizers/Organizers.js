import React from 'react'
import OrganizerCard from './OrganizerCard'
import './Organizers.css'
import img17 from '../../images/avatar.gif'
import img1 from '../../images/organizer/divyaprakash.jpg'
import img2 from '../../images/organizer/paritosh.jpg'
import img3 from '../../images/organizer/amritraj.jpg'
import img4 from '../../images/organizer/neerajpatil.jpg'
import img5 from '../../images/organizer/samriddhi.jpg'
import img6 from '../../images/organizer/surajkumar.jpg'
import img7 from '../../images/organizer/digvijay.jpg'

const Organizers = () => {
    
    const leads = [
        {
            name: 'Divya Prakash',
            role: 'Lead Organizer',
            logo: `${img1}`,
            linkedin: 'https://www.linkedin.com/in/divyaprakashrx/',
            twitter: 'https://twitter.com/divyaprakashrx',
            github: 'https://github.com/divyaprakashrx'
        },
        {
            name: 'Paritosh Kumar',
            role: 'Lead Organizer',
            logo: `${img2}`,
            linkedin: 'https://www.linkedin.com/in/paritoshkr/',
            twitter: 'https://twitter.com/heyparitosh',
            github: 'https://github.com/paritoshkr'
        },
        {
            name: 'Amrit Raj',
            role: 'Lead Organizer',
            logo: `${img3}`,
            linkedin: 'https://www.linkedin.com/in/amrit-raj-ba2a15190/',
            twitter: '',
            github: 'https://github.com/dev-amrit460'
        },
        {
            name: 'Neeraj Patil',
            role: 'Lead Organizer',
            logo: `${img4}`,
            linkedin: 'https://www.linkedin.com/in/neeraj-2212/',
            twitter: '',
            github: 'https://github.com/Neeraj2212'
        }, 
        {
            name: 'Shagufta Iqbal',
            role: 'PR Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/Shagufta08'
        },
        {
            name: 'Suraj Kumar',
            role: 'PR Co-Lead',
            logo: `${img6}`,
            linkedin: 'https://www.linkedin.com/in/kumarsuraj23/',
            twitter: 'https://twitter.com/kumar_suraj_bit',
            github: 'https://github.com/kumarSuraj-bit'
        },
        {
            name: 'Samriddhi Ambashta',
            role: 'Community Moderator',
            logo: `${img5}`,
            linkedin: 'https://www.linkedin.com/in/samriddhi-ambashta-8528a91ab/',
            twitter: '',
            github: 'https://github.com/samriddhiambashta'
        },
        {
            name: 'Aditi Kumari',
            role: 'Community Moderator',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/aditi-kumari-6219931a3/',
            twitter: '',
            github: 'https://github.com/aditikr257'
        },
       {
            name: 'Ayushmaan Sharma',
            role: 'Community Moderator',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/ayushman999'
        },
       {
            name: 'Mayank Kumar',
            role: 'Community Moderator',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/Sonunayan48'
        }, 
        {
            name: 'Archana',
            role: 'Community Moderator',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/archana3001'
        },

        {
            name: 'Saizal Sinha',
            role: 'Event Management Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/Saizalsinha'
        },
        {
            name: 'Tejas Manhas',
            role: 'Event Management Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/Tejas3772'
        },
        {
            name: 'Shivam Jha',
            role: 'Sponsors Lead',
            logo: `${img17}`,
            linkedin: 'http://www.linkedin.com/in/shivam-jha-78421592',
            twitter: '',
            github: 'https://github.com/jhashivam-2001'
        },
        {
            name: 'Priyanshu Shekhar',
            role: 'Design Lead',
            logo: `${img17}`,
            linkedin: 'https://linkedin.com/in/priyaanshu/',
            twitter: 'https://twitter.com/Priyans08981606',
            github: 'https://github.com/PriUY'
        },
        {
            name: 'Raj More',
            role: 'Design Manager',
            logo: `${img17}`,
            linkedin: 'https://linkedin.com/in/raj-more-50b543202',
            twitter: 'https://twitter.com/RajMore92073482?s=09',
            github: 'https://github.com/Raj82862'
        },
        {
            name: 'Pragati Verma',
            role: 'Content Creator',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/Pragati1122'
        },
        {
            name: 'Avinash Kumar',
            role: 'Content Creator',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: ''
        },
       {
            name: 'Tanvi Tanya',
            role: 'Content Creator',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/tanvitanyaa'
        },       
       {
            name: 'Animesh Maru',
            role: 'Content Creator',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: ''
        },
        {
            name: 'Pratik Anand',
            role: 'Web Lead',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/pratik-anand-/',
            twitter: '',
            github: 'https://github.com/pratik8696'
        },
        {
            name: 'Pragati Priya',
            role: 'Web Co-Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/pragatipriya20'
        },
        {
            name: 'Mohit Kumar',
            role: 'Social Media Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/mohit-kumar-b2'
        },
        {
            name: 'Firdaus Jawed',
            role: 'Social Media Manager',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: ''
        },
        {
            name: 'Digvijay Srivastava',
            role: 'Outreach Lead',
            logo: `${img7}`,
            linkedin: 'https://www.linkedin.com/in/dig9074vijay/',
            twitter: 'https://twitter.com/dig9074vijay',
            github: 'https://github.com/dig9074vijay'
        },
       {
            name: 'Srijan Shovit',
            role: 'Outreach Co-Lead',
            logo: `${img17}`,
            linkedin: 'https://linkedin.com/in/srijan-shovit-6b3b131ba',
            twitter: '',
            github: 'https://github.com/SrijanShovit'
        },  
       {
            name: 'Pulkit Kr Agarwal',
            role: 'Outreach Co-Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/pka5667'
        },
       {
            name: 'Rachit Suneja',
            role: 'Outreach Co-Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/RachitSuneja'
        },  
       {
            name: 'Harsh Anand',
            role: 'Outreach Co-Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/its-me-Harsh-Anand'
        },
       {
            name: 'Ayush Gautam',
            role: 'Outreach Co-Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/ayushgautam7'
        },
        {
            name: 'Vikas Kumar Gond',
            role: 'Outreach Co-Lead',
            logo: `${img17}`,
            linkedin: '',
            twitter: '',
            github: 'https://github.com/VikasKrGond'
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
