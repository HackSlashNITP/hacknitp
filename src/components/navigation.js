import React, { useState } from "react"
import logo from "../images/logo.svg"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from "reactstrap"

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/" disabled>
          <img
            src={logo}
            style={{ maxHeight: `50px`, marginLeft: `50px` }}
            className="img-fluid"
            alt=" "
          />
        </NavbarBrand>
        <span style={{ flex: `4 1 auto` }} />
        <NavbarToggler color="dark" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="navlink">
              <NavLink href="#about">About Us</NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#stacks">Stacks</NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#sponsers">Sponsers</NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#" disabled>FAQs</NavLink>
            </NavItem>
            <NavItem className="navlink">
              <NavLink href="#contact" >Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
