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
import img8 from '../../images/organizer/shagufta_Iqbal.jpeg'
import img9 from '../../images/organizer/AditiKumari.jpeg'
import img10 from '../../images/organizer/AyushmanSharma.jpeg'
import img11 from '../../images/organizer/MayankKumar.jpeg'
import img12 from '../../images/organizer/SaizalSinha.jpeg'
import img13 from '../../images/organizer/TejasManhas.jpeg'
import img14 from '../../images/organizer/ShivamJha.jpeg'
import img15 from '../../images/organizer/PriyanshuShekhar.jpeg'
import img16 from '../../images/organizer/RajMore.jpeg'
import img18 from '../../images/organizer/PragatiVerma.jpeg'
import img19 from '../../images/organizer/AvinashKumar.jpeg'
import img20 from '../../images/organizer/TanviTanya.jpeg'
import img21 from '../../images/organizer/AnimeshMaru.jpeg'
import img22 from '../../images/organizer/PratikAnand.jpeg'
import img23 from '../../images/organizer/PragatiPriya.jpeg'
import img24 from '../../images/organizer/SrijanShovit.jpeg'
import img25 from '../../images/organizer/PulkitKAgarwal.jpeg'
import img26 from '../../images/organizer/RachitSuneja.jpeg'
import img27 from '../../images/organizer/HarshAnand.jpeg'
import img28 from '../../images/organizer/AyushGautam.jpeg'
import img29 from '../../images/organizer/VikasKGond.jpeg'
import img30 from '../../images/organizer/FirdausJaved.jpeg'
import img31 from '../../images/organizer/MohitKumar.jpeg'
import img32 from '../../images/organizer/SudhanshuRanjan.jpeg'

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
            logo: `${img8}`,
            linkedin: 'https://www.linkedin.com/in/shaguftaiqbal/',
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
            logo: `${img9}`,
            linkedin: 'https://www.linkedin.com/in/aditi-kumari-6219931a3/',
            twitter: '',
            github: 'https://github.com/aditikr257'
        },
       {
            name: 'Ayushmaan Sharma',
            role: 'Community Moderator',
            logo: `${img10}`,
            linkedin: 'https://www.linkedin.com/in/ayushman-sharma-2a9380196/',
            twitter: '',
            github: 'https://github.com/ayushman999'
        },
       {
            name: 'Mayank Kumar',
            role: 'Community Moderator',
            logo: `${img11}`,
            linkedin: 'https://www.linkedin.com/in/sonunayan48/',
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
            logo: `${img12}`,
            linkedin: 'https://www.linkedin.com/in/saizal/',
            twitter: '',
            github: 'https://github.com/Saizalsinha'
        },
        {
            name: 'Tejas Manhas',
            role: 'Event Management Lead',
            logo: `${img13}`,
            linkedin: 'https://www.linkedin.com/in/tejas-manhas-97b2b4202/',
            twitter: '',
            github: 'https://github.com/Tejas3772'
        },
        {
            name: 'Shivam Jha',
            role: 'Sponsors Lead',
            logo: `${img14}`,
            linkedin: 'http://www.linkedin.com/in/shivam-jha-78421592',
            twitter: '',
            github: 'https://github.com/jhashivam-2001'
        },
        {
            name: 'Priyanshu Shekhar',
            role: 'Design Lead',
            logo: `${img15}`,
            linkedin: 'https://linkedin.com/in/priyaanshu/',
            twitter: 'https://twitter.com/Priyans08981606',
            github: 'https://github.com/PriUY'
        },
        {
            name: 'Raj More',
            role: 'Design Manager',
            logo: `${img16}`,
            linkedin: 'https://linkedin.com/in/raj-more-50b543202',
            twitter: 'https://twitter.com/RajMore92073482?s=09',
            github: 'https://github.com/Raj82862'
        },
        {
            name: 'Pragati Verma',
            role: 'Content Creator',
            logo: `${img18}`,
            linkedin: 'https://www.linkedin.com/in/pragati-verma-654639212/',
            twitter: '',
            github: 'https://github.com/Pragati1122'
        },
        {
            name: 'Avinash Kumar',
            role: 'Content Creator',
            logo: `${img19}`,
            linkedin: 'https://www.linkedin.com/in/avinash-kumar-0a66a782/',
            twitter: '',
            github: 'https://github.com/Avik17'
        },
       {
            name: 'Tanvi Tanya',
            role: 'Content Creator',
            logo: `${img20}`,
            linkedin: 'https://www.linkedin.com/in/tanvi-tanya-3a7b58213/',
            twitter: '',
            github: 'https://github.com/tanvitanyaa'
        },       
       {
            name: 'Animesh Maru',
            role: 'Content Creator',
            logo: `${img21}`,
            linkedin: 'https://www.linkedin.com/in/animesh-maru/',
            twitter: '',
            github: 'https://github.com/animeshmaru'
        },
        {
            name: 'Pratik Anand',
            role: 'Web Lead',
            logo: `${img22}`,
            linkedin: 'https://www.linkedin.com/in/pratik-anand-/',
            twitter: '',
            github: 'https://github.com/pratik8696'
        },
        {
            name: 'Pragati Priya',
            role: 'Web Co-Lead',
            logo: `${img23}`,
            linkedin: 'https://www.linkedin.com/in/pragati2000/',
            twitter: '',
            github: 'https://github.com/pragatipriya20'
        },
        {
            name: 'Sudhanshu Ranjan',
            role: 'Web Co-Lead',
            logo: `${img32}`,
            linkedin: 'https://www.linkedin.com/in/sudhanshu-ranjan-a1779b202/',
            twitter: '',
            github: 'https://github.com/SudhansuuRanjan'
        },
        {
            name: 'Mohit Kumar',
            role: 'Social Media Lead',
            logo: `${img31}`,
            linkedin: 'https://www.linkedin.com/in/mohit-kumar-02b07667/',
            twitter: '',
            github: 'https://github.com/mohit-kumar-b2'
        },
        {
            name: 'Firdaus Jawed',
            role: 'Social Media Manager',
            logo: `${img30}`,
            linkedin: 'https://www.linkedin.com/in/firdaus-jawed/',
            twitter: '',
            github: 'https://github.com/FirdausJawed'
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
            logo: `${img24}`,
            linkedin: 'https://linkedin.com/in/srijan-shovit-6b3b131ba',
            twitter: '',
            github: 'https://github.com/SrijanShovit'
        },  
       {
            name: 'Pulkit Kr Agarwal',
            role: 'Outreach Co-Lead',
            logo: `${img25}`,
            linkedin: 'https://www.linkedin.com/in/pka5667/',
            twitter: '',
            github: 'https://github.com/pka5667'
        },
       {
            name: 'Rachit Suneja',
            role: 'Outreach Co-Lead',
            logo: `${img26}`,
            linkedin: 'https://www.linkedin.com/in/rachit-suneja-99843721a/',
            twitter: '',
            github: 'https://github.com/RachitSuneja'
        },  
       {
            name: 'Harsh Anand',
            role: 'Outreach Co-Lead',
            logo: `${img27}`,
            linkedin: 'https://www.linkedin.com/in/harsh-anand-3b369a210/',
            twitter: '',
            github: 'https://github.com/its-me-Harsh-Anand'
        },
       {
            name: 'Ayush Gautam',
            role: 'Outreach Co-Lead',
            logo: `${img28}`,
            linkedin: 'https://www.linkedin.com/in/ayushgautam07/',
            twitter: '',
            github: 'https://github.com/ayushgautam7'
        },
        {
            name: 'Vikas Kumar Gond',
            role: 'Outreach Co-Lead',
            logo: `${img29}`,
            linkedin: 'https://www.linkedin.com/in/vikas-kumar-gond-bb1991201/',
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
