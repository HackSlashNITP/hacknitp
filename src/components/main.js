import React from "react"
import logo from "../images/logo.svg"
import Navigation from "./navigation"
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        days: 0,
        hours: 0,
        mintues: 0,
        seconds: 0,
      },
      duration: 0,
    }
    this.startTimer = this.startTimer.bind(this)
    this.run = this.run.bind(this)
  }
  msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60)
    let mintues = Math.floor((duration / (1000 * 60)) % 60)
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    let days = Math.floor((duration / (1000 * 60 * 60 * 60)) % 24) - 1

    days = days.toString().padStart(2, "0")
    hours = hours.toString().padStart(2, "0")
    mintues = mintues.toString().padStart(2, "0")
    seconds = seconds.toString().padStart(2, "0")
    return {
      days,
      hours,
      mintues,
      seconds,
    }
  }
  componentDidMount() {
    let d1 = Date.now()
    let d2 = new Date(2021, 1, 15).getTime()
    let duration = d2 - d1
    //console.log(d1 + ":d1\n" + d2 + " :d2\n" + duration + " :duration")
    this.setState(
      {
        duration: duration,
      }
    )
    this.startTimer()
  }

  startTimer() {
    this.timer = window.setInterval(() => this.run(), 1000)
  }

  run() {
    let d1 = Date.now()
    let d2 = new Date(2021, 1, 15).getTime()
    let duration = d2 - d1
    //console.log(d1 + ":d1\n" + d2 + " :d2\n" + duration + " :duration")

    this.setState(
      {
        duration: duration,
        time: this.msToTime(this.state.duration),
      }
    )
    if (this.state.duration === 0) {
      window.clearInterval(this.timer)
    }
  }
  render() {
    return (
      <>
        <div className="wrap">
          <Navigation />
          <div className="logowrap d-flex justify-content-center align-items-center">
            <div style={{ width: `100%` }}>
              <div style={{ textAlign: `center` }}>
                <img
                  src={logo}
                  alt="HackNITP'21"
                  style={{ maxWidth: `85%` }}
                  className="img-fluid"
                />
              </div>
              <div className="d-flex justify-content-center m-4">
                <div
                  class="apply-button"
                  data-hackathon-slug="hacknitp"
                  data-button-theme="light"
                  style={{ height: "44px", width: "312px" }}
                ></div>
              </div>
              <div className="timer-bar">
                <div className="timer-box">
                  <h2>{this.state.time.days}</h2>
                  <h7>Days</h7>
                </div>
                <div className="timer-box">
                  <h2>{this.state.time.hours}</h2>
                  <h7>Hours</h7>
                </div>
                <div className="timer-box">
                  <h2>{this.state.time.mintues}</h2>
                  <h7>Mintues</h7>
                </div>
                <div className="timer-box">
                  <h2>{this.state.time.seconds}</h2>
                  <h7>Seconds</h7>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Main
