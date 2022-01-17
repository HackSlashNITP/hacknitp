import React from 'react'
import OrganizerCard from './OrganizerCard'
import './Organizers.css'

import img17 from '../../images/avatar.gif'

const Organizers = () => {
    
    const leads = [
        {
            name: 'Divya Prakash',
            role: 'Lead Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/divyaprakashrx/',
            twitter: 'https://twitter.com/divyaprakashrx',
            github: 'https://github.com/divyaprakashrx'
        },
        {
            name: 'Paritosh Kumar',
            role: 'Lead Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/paritoshkr/',
            twitter: 'https://twitter.com/heyparitosh',
            github: 'https://github.com/paritoshkr'
        },
        {
            name: 'Amrit Raj',
            role: 'Lead Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/amrit-raj-ba2a15190/',
            twitter: '/',
            github: 'https://github.com/dev-amrit460'
        },
        {
            name: 'Neeraj Patil',
            role: 'Lead Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/neeraj-2212/',
            twitter: '/',
            github: 'https://github.com/Neeraj2212'
        }, 
        {
            name: 'Saizal Sinha',
            role: 'Event Management Lead',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/company/hackslash',
            twitter: 'https://twitter.com/hackslash_nitp/',
            github: 'https://github.com/Saizalsinha'
        },
        {
            name: 'Tejas Manhas',
            role: 'Event Management Lead',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/company/hackslash',
            twitter: 'https://twitter.com/hackslash_nitp/',
            github: 'https://github.com/Tejas3772'
        },
        {
            name: 'Shivam Jha',
            role: 'Sponsors Lead',
            logo: `${img17}`,
            linkedin: 'http://www.linkedin.com/in/shivam-jha-78421592',
            twitter: '/',
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
            role: 'Designer',
            logo: `${img17}`,
            linkedin: 'https://linkedin.com/in/raj-more-50b543202',
            twitter: 'https://twitter.com/RajMore92073482?s=09',
            github: 'https://github.com/Raj82862'
        },
        {
            name: 'Pratik Anand',
            role: 'Web Lead',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/pratik-anand-/',
            twitter: '/',
            github: 'https://github.com/pratik8696'
        },
        {
            name: 'Pragati Priya',
            role: 'Web Developer',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/pragatipriya20'
        },
        {
            name: 'Pragati Verma',
            role: 'Content Creator',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/Pragati1122'
        },
        {
            name: 'Avinash Kumar',
            role: 'Content Creator',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: '/'
        },
       {
            name: 'Tanvi Tanya',
            role: 'Content Creator',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/tanvitanyaa'
        },       
       {
            name: 'Animesh Maru',
            role: 'Content Creator',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: '/'
        },
        {
            name: 'Mohit Kumar',
            role: 'Social Media Lead',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/mohit-kumar-b2'
        },
        {
            name: 'Firdaus Jawed',
            role: 'Social Media Manager',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: '/'
        },
        {
            name: 'Digvijay Srivastava',
            role: 'Outreach Lead',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/dig9074vijay/',
            twitter: 'https://twitter.com/dig9074vijay',
            github: 'https://github.com/dig9074vijay'
        },
        {
            name: 'Vikas Kumar Gond',
            role: 'Outreach Co-Lead',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/VikasKrGond'
        },
        {
            name: 'Suraj Kumar',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/kumarsuraj23/',
            twitter: 'https://twitter.com/kumar_suraj_bit',
            github: 'https://github.com/kumarSuraj-bit'
        },
        {
            name: 'Shagufta Iqbal',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/Shagufta08'
        },
        {
            name: 'Samriddhi Ambashta',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/samriddhiambashta'
        },
       {
            name: 'Ayushmaan Sharma',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/ayushman999'
        },
        {
            name: 'Aditi Kumari',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/in/aditi-kumari-6219931a3/',
            twitter: '/',
            github: 'https://github.com/orgs/hackslash-nitp/people/aditikr257'
        },
        {
            name: 'Archana',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/archana3001'
        },
       {
            name: 'Mayank Kumar',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/Sonunayan48'
        },       
       {
            name: 'Srijan Shovit',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: 'https://linkedin.com/in/linkedin.com/in/srijan-shovit-6b3b131ba',
            twitter: '/',
            github: 'https://github.com/SrijanShovit'
        },        
       {
            name: 'Rachit Suneja',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/RachitSuneja'
        },    
       {
            name: 'Pulkit Kumar Agarwal',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/pka5667'
        },
       {
            name: 'Harsh Anand',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/company/hackslash',
            twitter: 'https://twitter.com/hackslash_nitp/',
            github: 'https://github.com/its-me-Harsh-Anand'
        },
       {
            name: 'Ayush Gautam',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: '/',
            twitter: '/',
            github: 'https://github.com/ayushgautam7'
        },
        
       {
            name: 'Lorem Ipsum',
            role: 'Organizer',
            logo: `${img17}`,
            linkedin: 'https://www.linkedin.com/company/hackslash',
            twitter: 'https://twitter.com/hackslash_nitp/',
            github: 'https://github.com/orgs/hackslash-nitp'
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
