import React from "react"

const Footer = (props) => (
  <div style={{"text-align": "center"}}>
    <hr />
    &copy; {new Date().getFullYear()}, Built with
        {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
)

export default Footer