import React, { Component } from 'react'
import logo_footer from '../../assets/icons/poweredby.svg'

// Adding styling here becuase not sure why the scss for footer aint working :(
const footerConStyle = {
    height: '78px',    
    backgroundColor: '#4c1367',
    textAlign: 'center',
    paddingTop: '5px'
  }

const logoFooterStyle = {
    width: '85px',    
    height: '73px'
}

let Footer = (props) => {
  return (
    <div id="footer-container " className="show-for-small-only" style={footerConStyle}>
        <img src={logo_footer} className="icon logo_footer" alt="logo_footer" style={logoFooterStyle}/>
    </div>
  )
}

export default Footer