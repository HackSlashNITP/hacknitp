import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import './Homepage.css'
import hacknitpold from '../../images/hacknitp-old.svg'
import gameon from '../../images/game-on.svg'
import Timer from '../timer/Timer'
import NavB from '../navbar2/NavB'
import Prizes from '../prizes/Prizes'
import Tracks from '../tracks/Tracks'
import Timeline from '../timeline/Timeline'
import Instructions from '../instructions/Instructions'
import Organizers from '../organizers/Organizers'
import Sponsors from '../sponsors/Sponsors'
import Contact from '../contact/Contact'
import Faq from '../faq/Faq'
import Footer from '../footer/Footer'
import Intro from '../intro/Intro'
import AOS from 'aos';
import "aos/dist/aos.css";
import apply from '../../images/apply.png'

const HomePage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    const btnstyle = {
        height: "38px",
        width: "201px"
    }
    return (
        <div className='body'>
            <div className="home-body">
                <NavB />
                <div className="home-body-bg" data-aos="fade-up">
                    <div className="home-left">
                        <img src={hacknitpold} className='hack-old' alt="hacknitp" />
                        <h3 className="home-date">
                            February 11,2022 - February 13,2022
                        </h3>
                        <p className="home-para">
                            A Hackathon is not merely a competition but is a place where people learn the art of solving problems, make friends, build their network, and have fun. You learn how to work collaboratively in a team to build a hack. Let the innovation inside you flourish in HackNITP 4.0 and turn the craziest of your ideas into a reality.
                        </p>
                        <div className="home-btns headline">
                            <div
                                className="apply-button"
                                data-hackathon-slug="hacknitp-4"
                                data-button-theme="dark"
                                style={btnstyle}
                            ></div>
                            <a href="https://bit.ly/hacknitp-4-discord" target='_blank' className='discordbtn' rel='noreferrer'><button className='btn-secondary' id="fix">
                                <span>Join Discord</span></button>
                            </a>
                        </div>
                    </div>
                    <div className="home-right">
                        <img src={gameon} alt="game-on" className='game-on' />
                    </div>

                </div>
            </div>
            <Intro />
            <Timer />
            <Prizes />
            <Timeline />
            <Tracks />
            <Instructions />
            <Organizers />
            <Sponsors />
            <Contact />
            <Faq />
            <Footer />
        </div >
    )
}

export default HomePage
