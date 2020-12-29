import React from "react"
import "./tab.css"

const CardTab = props => {
  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3" id="cardcol">
        <div className="box" style={{ minWidth: `225px` }}>
          <img src={props.imgsrc} className="img-fluid" />
          <div className="box-layer"></div>
          <div className="box-content">
            <h4 className="title">{props.name}</h4>
            <p className="description">
              {props.description || "Click below to visit linkedin profile"}
              <br />
            </p>
            <a className="read-more" href={props.link}>
              <img
                id="icon"
                src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                alt="Linkedin"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardTab
