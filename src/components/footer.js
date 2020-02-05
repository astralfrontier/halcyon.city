import React from "react"
import Navbar from 'react-bootstrap/Navbar'

const Footer = (props) => (
  <div style={{"text-align": "center"}}>
    <hr />
    &copy; {new Date().getFullYear()}, Built with
        {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
)

export default Footer