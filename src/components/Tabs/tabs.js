import React, { useState } from "react"
import "./tab.css"
import CardTab from "./tabCard"
import tabData from "./tabData"

function Tab() {
  const [count, setCount] = useState(0)

  function Card(val) {
    return (
      <CardTab
        imgsrc={val.imgsrc}
        name={val.head}
        link={val.link}
        description={val.description}
      />
    )
  }

  function clicked(num) {
    setCount(num)
  }
  return (
    <>
      <div className="container-fluid button-tabs">
        <div className="d-flex justify-content-center ">
          <button
            id="button"
            type="button"
            className={` ${count === 0 ? " active-glow" : "glow"}`}
            onClick={() => {
              clicked(0)
            }}
          >
            Judges
          </button>
          <button
            id="button"
            type="button"
            className={` ${count === 1 ? " active-glow" : "glow"}`}
            onClick={() => {
              clicked(1)
            }}
          >
            Speakers
          </button>

          {/* <button
            id="button"
            type="button"
            className="glow"
            onClick={() => setCount(2)}
          >
            Mentors
          </button> */}
          {/* <button
            id="button"
            type="button"
            className="glow"
            onClick={() => setCount(3)}
          >
            Sponsers
          </button> */}
        </div>

        <div className="row justify-content-center">
          {tabData[count].map(Card)}
        </div>
      </div>
    </>
  )
}
export default Tab
