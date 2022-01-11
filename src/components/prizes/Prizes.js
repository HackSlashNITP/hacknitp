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
        "To be announced",
        "To be announced",
        "To be announced",
        "To be announced",
        "To be announced",
        "To be announced",
        "To be announced",
        "To be announced",
        "To be announced",
        "To be announced",
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
               <div className="prizes-btn">
                   <button className='btn-primary knowmore'>Know More</button>
               </div>
               </div>
           </div>
        </div>
    )
}

export default Prizes
