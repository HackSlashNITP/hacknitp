import React, {useEffect} from 'react'
import './Prizes.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Prizes = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const list=[
        "Awards are for the teams securing first, second and third positions in the hackathon, regardless of the number of members in the team.",
        "On a golden note, the top all-girls team, that is comprising only the female members, will be awarded, regardless of the overall position, a momentous prize.",
        "The prize for the top all-girls team will be awarded if and only if at least five all-girls teams will submit their hack in the hackathon.",
        "There are no theme-specific prizes.",
        "Participation certificates will be distributed at least 30 days after the declaration of the hackathon result.",
        "Prizes will be disbursed at least 30 days after the declaration of the hackathon result.",
        "Special Track Prizes will be disbursed within a couple of weeks after the declaration of the results of the respective special track.",
        // "To be announced",
        // "To be announced",
        // "To be announced",
  ]
    return (
        <div>
           <h1 className="heading">PRIZES</h1> 
           <div className="prize-container">
               <div data-aos="fade-up">
                   <h2 className="prizes-head">
                   Perks for each participant
               </h2>
               <ul>
                   
                      { list.map((item,index) => <li key={index} className='list-item'>{item}</li>)}
                   

               </ul>
               {/* <div className="prizes-btn">
                   <button className='btn-primary knowmore'>Know More</button>
               </div> */}
               </div>
           </div>
        </div>
    )
}

export default Prizes
