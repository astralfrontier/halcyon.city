import React from "react"
import PropTypes from "prop-types"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Navbar.Brand href="/">
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="https://twitter.com/astralfrontier">Twitter</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header