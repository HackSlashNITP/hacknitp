import React from "react"

const PrizeCard = props => {
  return (
    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        {/* <a href=""> */}
            <div class="card-flyer">
                <div class="text-box">
                    <div class="image-box">
                        <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />
                    </div>
                    <div class="text-container">
                        <h6>Challenge</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><br/>
                        <h6>Prizes</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        {/* </a> */}
    </div>
  )
}

export default PrizeCard