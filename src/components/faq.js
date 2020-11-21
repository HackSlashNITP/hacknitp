import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Component, useState } from "react"
import { FAQ } from "../shared/faq-data"
import {
  FaqWrapper,
  FaqSection,
  FaqHeading,
  ExpandTag,
  FaqSolutionWrapper,
} from "./style"
import { Collapse } from "reactstrap"

function RenderFaq({ item }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const toggleIcon = isOpen => {
    if (isOpen) {
      return <FontAwesomeIcon icon={faMinusCircle} />
    } else {
      return <FontAwesomeIcon icon={faPlusCircle} />
    }
  }
  return (
    <div>
      <FaqWrapper key={item.id} role="button" onClick={toggle}>
        <span style={{ marginRight: 20, paddingRight: 20 }}>
          {item.question}
        </span>
        <ExpandTag>{toggleIcon(isOpen)}</ExpandTag>
      </FaqWrapper>
      <Collapse isOpen={isOpen}>
        <FaqSolutionWrapper>{item.solution}</FaqSolutionWrapper>
      </Collapse>
    </div>
  )
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
        <h1 className="heading row justify-content-center">
          Some Question Asked by You
        </h1>
        <div className="row d-flex  justify-content-center">
          <ul className="col-11 col-md-9 col-lg-7 list-unstyled ">{faq}</ul>
        </div>
      </FaqSection>
    )
  }
}

export default Faq
