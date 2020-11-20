import React, { Component } from "react"
import { FAQ } from "../shared/faq-data"
import { FaqWrapper, FaqSection, FaqHeading } from "./style"

function RenderFaq({ item }) {
  return <FaqWrapper key={item.id}>{item.question}</FaqWrapper>
}

class Faq extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faq: FAQ,
    }
  }

  render() {
    const faq = this.state.faq.map(que => {
      return (
        <li className="mb-2">
          <RenderFaq item={que} />
        </li>
      )
    })

    return (
      <FaqSection>
        <FaqHeading className="row justify-content-center">
          Some Question Asked by You
        </FaqHeading>
        <div className="row d-flex  justify-content-center">
          <ul className="col-11 col-md-9 list-unstyled ">{faq}</ul>
        </div>
      </FaqSection>
    )
  }
}

export default Faq
