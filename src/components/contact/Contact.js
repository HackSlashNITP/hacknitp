import React from 'react'
import './Contact.css';
import contactImg from '../../images/contact-img.svg'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="contact-head" data-aos="fade-up">
                <h1 className="heading">
                <span className="black">
                    Contact Us
                </span>
            </h1>
            <p className="grey">
                For any query contact us
            </p>
            </div>
            <div className="contact-flex" data-aos="fade-up">
                <div className="contact-form">
                    <h3 className="form-head">
                        Fill the Details
                    </h3>
                    <form action="mailto:hackslashclub@nitp.ac.in" method="post">
                        <input type="text" placeholder='Name' required/>
                        <input type="email" name="email" id="" placeholder='E-mail' required/>
                        <input type="number" name="" id="" placeholder='Contact Number' required/>
                        <textarea name="message" id="text-area" cols="30" rows="10" placeholder='Enter your messege...'></textarea>
                        <button type="submit" className='btn-primary'>Send</button>
                    </form>
                   
                </div>
                <div className="contact-img">
                   <img src={contactImg} alt="" className='contactImg'/>
                </div>
            </div>
        </div>
    )
}

export default Contact
