import React, { useState } from "react"
import { prizeData } from "./prizeData"
import { PrizeSection } from "./../style"
import nextIc from "./controller/next.svg"
import prevIc from "./controller/prev.svg"
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
      <>
        <div className="row" style={{ backgroundColor: `#0f0000` }}>
          <div
            className="col-md-6"
            style={{
              backgroundColor: `rgba(255,255,255,0.15)`,
            }}
          >
            <img
              src={item.src}
              className="img-fluid"
              style={{ margin: `50px 0` }}
            />
          </div>

          <PrizeSection className="col-md-6" style={{ color: `white` }}>
            <h2 className="title" style={{ color: `${item.color}` }}>
              {item.name}
            </h2>
            {item.text}
          </PrizeSection>
        </div>
      </>
    )
  })

  return (
    <>
      <h1
        style={{
          backgroundColor: "#0f0000",
          color: `white`,
          textAlign: `center`,
          margin: 0,
          padding: "50px",
          fontFamily: `poppins`,
          fontSize: "3rem",
        }}
      >
        Prizes
      </h1>
      {slides}
    </>
  )
}
export default Prizes
