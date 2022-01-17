import React, { useEffect } from 'react'
import './Prizes.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Prizes = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    
    const firstPrize = [
        "350$ Digital Ocean Credits to all members of the winning team. (100$ 60-day free trial + 250$ DO Credits.)",
        "₹1200/- GFG-discount coupon to winner team's members.",
        "Clerky Lifetime package to winning team (as a whole). The idea behind offering this prize is to help the winning team start a company around the project that won the hackathon.",
        "Lifetime Taskade workspace upgrade to the team.",
        "1 year License of Axure-RP Team Plan.",
        "1-month FREE access to all Business Plan features of the echo3D platform. ($89 each)",
        "1-month access to all courses on Interview Cake.",
        "Voiceflow Professional License coupon for all participants valued at $49 per month.",
        "Swags to all members of the team."
    ]

    const secondPrize = [
        "225$ Digital Ocean Credits to all members of the winning team. (100$ 60-day free trial + 125$ DO Credits.)",
        "₹800/- GFG-discount coupon to winner team's members.",
        "Lifetime Taskade workspace ugrade to the team.",
        "1 year License of Axure-RP Team Plan.",
        "1-month FREE access to all Business Plan features of the echo3D platform. ($89 each)",
        "1-month access to all courses on Interview Cake.",
        "Voiceflow Professional License coupon for all participants valued at $49 per month.",
        "Swags to all members of the team."
    ]

    const thirdPrize = [
        "225$ Digital Ocean Credits to all members of the winning team. (100$ 60-day free trial + 125$ DO Credits.)",
        "₹500/- GFG-discount coupon to winner team's members.",
        "Lifetime Taskade workspace ugrade to the team.",
        "1 year License of Axure-RP Team Plan.",
        "1-month FREE access to all Business Plan features of the echo3D platform. ($89 each)",
        "1-month access to all courses on Interview Cake.",
        "Voiceflow Professional License coupon for all participants valued at $49 per month.",
        "Swags to all members of the team.",
    ]

    const trackPrize = [
        [
            "₹10,000 for the best hack built on Ethereum, or ₹15,000 for the best hack built on Ethereum + Polygon",
            "Eligibility to apply for internship/full-time roles",
            "Seed funding of up to 5,000 USD for winners!",
        ],
        [
            "₹20,000 for best Dapp built on Tezos",
            "Continuity grant opportunity up to 5,000 USD for outstanding projects",
            "Every valid submission will be rewarded with exclusive Schwag Kits.",
        ],
        [
            "₹20000 for best use of IPFS and/or Filecoin",
        ],
        [
            "₹20,000 for best Dapp built on Celo",
            "Continuity Support",
        ],

    ]

    const allparticpant = [
        "Digital Ocean $100, 60-day free trial for all attendees who register using this link https://try.digitalocean.com/developer-cloud.",
        "₹300/- GFG-discount coupon to all participants.",
        "1-month FREE access to all Business Plan features of the echo3D platform. ($89 each)",
        "1-month access to all courses on Interview Cake.",
        "Voiceflow Professional License coupon for all participants valued at $49 per month.",
        "5 Year free upgrade of Taskade Workspace for your team.",
        "Certificate of Participation.",
    ]

    // const list = [
    //     "Awards are for the teams securing first, second and third positions in the hackathon, regardless of the number of members in the team.",
    //     "On a golden note, the top all-girls team, that is comprising only the female members, will be awarded, regardless of the overall position, a momentous prize.",
    //     "The prize for the top all-girls team will be awarded if and only if at least five all-girls teams will submit their hack in the hackathon.",
    //     "There are no theme-specific prizes.",
    //     "Participation certificates will be distributed at least 30 days after the declaration of the hackathon result.",
    //     "Prizes will be disbursed at least 30 days after the declaration of the hackathon result.",
    //     "Special Track Prizes will be disbursed within a couple of weeks after the declaration of the results of the respective special track.",
    // ]

    return (
        <div>
            <h1 className="heading">PRIZES</h1>
            <div className="prize-container">
                <div data-aos="fade-up">
                    <h2 className="prizes-head">
                        Winner
                    </h2>
                    <ul>
                        <li className='list-item'><b>₹ 10,000/- Cash Prize.</b></li>
                        {firstPrize.map((item, index) => <li key={index} className='list-item'>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="prize-container">
                <div data-aos="fade-up">
                    <h2 className="prizes-head">
                        1st Runner Up
                    </h2>
                    <ul>
                        <li className='list-item'><b>₹ 8,000/- Cash Prize.</b></li>
                        {secondPrize.map((item, index) => <li key={index} className='list-item'>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="prize-container">
                <div data-aos="fade-up">
                    <h2 className="prizes-head">
                        2nd Runner Up
                    </h2>
                    <ul>
                        <li className='list-item'><b>₹ 5,000/- Cash Prize.</b></li>
                        {thirdPrize.map((item, index) => <li key={index} className='list-item'>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="prize-container">
                <div data-aos="fade-up">
                    <h2 className="prizes-head">
                        Track Prize (Polygon)
                    </h2>
                    <ul>
                        {trackPrize[0].map((item, index) => <li key={index} className='list-item'>{item}</li>)}
                    </ul>
                </div>
                <div data-aos="fade-up">
                    <h2 className="prizes-head">
                        Track Prize (Tezos)
                    </h2>
                    <ul>
                        {trackPrize[1].map((item, index) => <li key={index} className='list-item'>{item}</li>)}  
                    </ul>
                </div>
                <div data-aos="fade-up">
                    <h2 className="prizes-head">
                        Track Prize (Filecoin)
                    </h2>
                    <ul>
                        {trackPrize[2].map((item, index) => <li key={index} className='list-item'>{item}</li>)}
                    </ul>
                </div>
                <div data-aos="fade-up">
                    <h2 className="prizes-head">
                        Track Prize (Celo)
                    </h2>
                    <ul>
                        {trackPrize[3].map((item, index) => <li key={index} className='list-item'>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="prize-container">
                <div data-aos="fade-up">
                    <h2 className="prizes-head">
                        For All Participants
                    </h2>
                    <ul>
                        <li className='list-item'>Digital Ocean $100, 60-day free trial for all attendees who register using this link <a href=' https://try.digitalocean.com/developer-cloud ' target="_blank" rel='noreferrer'> https://try.digitalocean.com/developer-cloud </a>.</li>
                        {allparticpant.map((item, index) => <li key={index} className='list-item'>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Prizes
    // < div className = "prize-container" >
    //     <div data-aos="fade-up">
    //         <h2 className="prizes-head">
    //             Perks for each participant
    //         </h2>
    //         <ul>
    //             {list.map((item, index) => <li key={index} className='list-item'>{item}</li>)}
    //         </ul>
    //         {/* <div className="prizes-btn">
    //                <button className='btn-primary knowmore'>Know More</button>
    //            </div> */}
    //     </div>
    //         </div >
