import React, { Component } from "react"
import styled from "styled-components"
import { FAQ } from "../shared/faq-data"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaqWrapper, FaqSection } from "./style"

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
        <div className="mb-2">
          <RenderFaq item={que} />
        </div>
      )
    })

    return (
      <FaqSection>
        <div className="col-lg-9 offset-lg-1">
          <ul>
            <li className="list-unstyled">{faq}</li>
          </ul>
        </div>
      </FaqSection>
    )
  }
}

export default Faq
