import React, { useState } from "react"
import { prizeData } from "./prizeData"
import { PrizeCard } from "./prizeCard"
import { PrizeSec, Prizesdiv, SponserHead } from "../style"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"
import "./prizes.css"

const items = [
  {
    src: "images/prizes/first.svg",
    name: "1st Prize",
    color: "#FFD700",
    text: (
      <ul>
        {prizeData[0].map(ent => {
          return <li>{ent}</li>
        })}
      </ul>
    ),
  },
  {
    src: "images/prizes/second.svg",
    name: "2nd Prize",
    color: "#C0C0C0",
    text: (
      <ul>
        {prizeData[1].map(ent => {
          return <li>{ent}</li>
        })}
      </ul>
    ),
  },
  {
    src: "images/prizes/third.svg",
    name: "3rd Prize",
    color: " #B4865D",
    text: (
      <ul>
        {prizeData[2].map(ent => {
          return <li>{ent}</li>
        })}
      </ul>
    ),
  },
]

const Prizes = props => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <PrizeSec>
          <div
            className="col-md-6"
            style={{
              backgroundColor: `rgba(255, 255, 255, 0.15)`,
              borderBottom: `10px solid ${item.color}`,
              height: `100%`,
            }}
          >
            <img src={item.src} className="img-fluid" alt={item.name} />
          </div>
          <div className="col-md-6">
            <h1 style={{ color: `${item.color}` }}>{item.name}</h1>
            <div className="prize-detail">{item.text}</div>
          </div>
        </PrizeSec>
      </CarouselItem>
    )
  })

  return (
    <>
      <Prizesdiv id="prizes">
        <h1 className="prize-head">Prizes</h1>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      <SponserHead color="floralwhite" style={{ marginTop: `75px` }}>
          Special Track Prizes
      </SponserHead>
      <div id="cards_landscape_wrap-2">
        <div className="container w-100">
            <div class="row d-flex justify-content-around">
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                {/* <a href=""> */}
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="images/sponsors/matic3.png" alt=""/>
                    </div>
                    <div class="text-container">
                      <h6>Challenge</h6>
                      <p>The project must be built on Ethereum or Matic.</p><br/>
                      <h6>Prizes</h6>
                      <p>1. ₹10,000 for the best hack built on Ethereum</p>
                      <p>2. ₹15,000 for the best hack built on Ethereum + Matic</p>
                      <p>3. Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!</p>
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                {/* <a href=""> */}
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="images/sponsors/Tezos.png" alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Challenge</h6>
                      <p>The project must be Dapp built on Tezos.</p><br/>
                      <h6>Prizes</h6>
                      <p>1. ₹10,000 for best Dapp built on Tezos</p>
                      <p>2. ₹5000 for Runners-up Dapp built on Tezos</p>
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                {/* <a href=""> */}
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="images/sponsors/dockship2.png" alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Challenge</h6>
                      <p>The project must be Dapp built on Tezos.</p><br/>
                      <h6>Prizes</h6>
                      <p>1. ₹10,000 for best Dapp built on Tezos</p>
                      <p>2. ₹5000 for Runners-up Dapp built on Tezos</p>
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                {/* <a href=""> */}
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src="images/sponsors/Portis2 .png" alt="" />
                    </div>
                    <div class="text-container">
                      <h6>Challenge</h6>
                      <p>The project must be Dapp built on Portis.</p><br/>
                      <h6>Prizes</h6>
                      <p>1. ₹15,000 (in crypto) for best Dapp built on Portis</p>
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </div>
            </div>
        </div>
    </div>
      </Prizesdiv>
    </>
  )
}
export default Prizes
