import React, { useState } from 'react'
import './faq.css'
import apply from '../../images/apply.png'
// import FaqBluePrint from './FaqBluePrint'
const Faq = () => {
  const [faq, setFaq] = useState(false);
  const [cnt, setCnt] = useState("");
  // const accordionItemHeaders = document.querySelectorAll(
  //   ".accordion-item-header"
  // );

  // accordionItemHeaders.forEach((accordionItemHeader) => {
  //   accordionItemHeader.addEventListener("click", (event) => {
  //     // Allow to collapse one item at a time
  //     const currentlyActiveAccordionItemHeader = document.querySelector(
  //       ".accordion-item-header.active"
  //     );
  //     if (
  //       currentlyActiveAccordionItemHeader &&
  //       currentlyActiveAccordionItemHeader !== accordionItemHeader
  //     ) {
  //       currentlyActiveAccordionItemHeader.classList.toggle("active");
  //       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
  //     }


  //     accordionItemHeader.classList.toggle("active");
  //     const accordionItemBody = accordionItemHeader.nextElementSibling;
  //     if (accordionItemHeader.classList.contains("active")) {
  //       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
  //     } else {
  //       accordionItemBody.style.maxHeight = 0;
  //     }
  //   });
  //   accordionItemHeader.addEventListener("click", function () {
  //     document.getElementById("test").scrollIntoView({ behavior: "smooth" });
  //   });
  // });


  return (
    <div className='faq-container' id='faq'>
      <div className="faq-head" data-aos="fade-up">
        <h1 className="heading">
          <span className="white">
            Frequently Asked </span> Questions
        </h1>
        <p className="grey">

        </p>
      </div>
      <div className="faqs" data-aos="fade-up">

        <div className="accordion-item">
          <div id="test" className="accordion-item-header" onClick={() => { setFaq(!faq); setCnt(1) }}>
            <div className="accordion-item-title">Do you have a particular theme for the Hackathon ?</div>
            <span className={`icon b1${cnt}${faq}`}></span>
          </div>
          <div className="accordion-item-body">
            <div className={`accordion-item-body-content a1${cnt}${faq}`}>
              Education<br />
              Employability<br />
              Food<br />
              Healthcare<br />
              Social Security and Awareness<br />
              Sustainable Development<br />
              Open Innovation
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="accordion-item">
          <div id="test" className="accordion-item-header" onClick={() => { setFaq(!faq); setCnt(2) }}>
            <div className="accordion-item-title">What can be the size of Team ?</div>
            <span className={`icon b2${cnt}${faq}`}></span>
          </div>
          <div className="accordion-item-body">
            <div className={`accordion-item-body-content a2${cnt}${faq}`}>
              A team can consist of 1-4 members.
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="accordion-item">
          <div id="test" className="accordion-item-header" onClick={() => { setFaq(!faq); setCnt(3) }}>
            <div className="accordion-item-title">What do I need to do to participate?</div>
            <span className={`icon b3${cnt}${faq}`}></span>
          </div>
          <div className="accordion-item-body">
            <div className={`accordion-item-body-content a3${cnt}${faq}`}>
              Apply using Devfolio and join HackSlash Discord server.
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="accordion-item">
          <div id="test" className="accordion-item-header" onClick={() => { setFaq(!faq); setCnt(4) }}>
            <div className="accordion-item-title">Are there any registration charges ? </div>
            <span className={`icon b4${cnt}${faq}`}></span>
          </div>
          <div className="accordion-item-body">
            <div className={`accordion-item-body-content a4${cnt}${faq}`}>
              Nope! None at all.
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="accordion-item">
          <div id="test" className="accordion-item-header" onClick={() => { setFaq(!faq); setCnt(5) }}>
            <div className="accordion-item-title">Do we get any certificate for participation ?</div>
            <span className={`icon b5${cnt}${faq}`}></span>
          </div>
          <div className="accordion-item-body">
            <div className={`accordion-item-body-content a5${cnt}${faq}`}>
              Yes, you do get a Certificate of Participation if your hack is submitted successfully.
            </div>
          </div>
        </div>
        <div className="divider"></div>

      </div>

      <div className="faq-foot" data-aos="fade-up">
        <h2 className="heading">
          <span className="white">
            What are you waiting for? Register now.
          </span>
        </h2>
        <div className="register-btn-faq">
          <a href="https://hacknitp-4.devfolio.co/" target='_blank' className='regbtn' rel='noreferrer'>
            <button className='register'> <img src={apply} alt='devfolio' className='devf' /><span>Apply with Devfolio</span></button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Faq
