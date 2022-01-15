import React from "react"
import './NavB.css'
import logo from '../../images/hacknitplogo.svg'
const NavB = () => {
    function handleMenu(e) {
        e.preventDefault();
        document.querySelector('.popup').classList.toggle("popup-open");
    }
    return (
        <div className='nav-bar'>
            <div className="popup">
                <div className="cut-btn-flex" onClick={handleMenu}>
                    <i class="fas fa-times popup-cut-btn"></i>
                </div>
                <nav class="stroke">
                    <ul className='nav-mob'>
                        <li><a href="/" rel="noreferrer">Home</a></li>
                        <li><a href="#about" rel="noreferrer">About</a></li>
                        <li><a href="#tracks" rel="noreferrer">Themes</a></li>
                        <li><a href="#contact" rel="noreferrer">Contact</a></li>
                        <li><a href="#faq" rel="noreferrer">FAQ</a></li>
                        <li><a href="https://bit.ly/hacknitp-4-discord" target='_blank' rel="noreferrer">HackSlash Discord</a></li>
                    </ul>
                    <div><a target="_blank" class="discordbtnf" href="https://hacknitp-4.devfolio.co" rel='noreferrer'><div class="disc-btn"><button class="btn btn-primary">Register</button></div></a></div>
                </nav>
            </div>
            <div class="navbar2">
                <div className="nav-jack">
                    <img src={logo} alt="" class="njack-logo" />
                </div>
                <div className="right">
                    <nav class="stroke">

                        <ul>
                            <li><a href="/" rel='noreferrer'>Home</a></li>
                            <li><a href="#about" rel='noreferrer'>About</a></li>
                            <li><a href="#tracks" rel='noreferrer'>Themes</a></li>
                            <li><a href="#contact" rel='noreferrer'>Contact</a></li>
                            <li><a href="#faq" rel='noreferrer'>FAQ</a></li>
                            <li><a href="https://bit.ly/hacknitp-4-discord" target='_blank' rel='noreferrer'>HackSlash Discord</a></li>
                        </ul>
                        <div><a target="_blank" class="discordbtnf" href="https://hacknitp-4.devfolio.co" rel='noreferrer'><div class="disc-btn"><button class="btn btn-primary">Register</button></div></a></div>
                
                    </nav>
                </div>
                <div className="right-alt">
                    <i class="fas fa-bars" onClick={handleMenu}></i>
                </div>
            </div>
        </div>
    )
}

export default NavB
