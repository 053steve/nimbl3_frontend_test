import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside' //module for listening to outside clicks
import { toggle_menu } from '../../actions'

//logos------------------
import logo from '../../assets/icons/logo-white.svg'
import logo_footer from '../../assets/icons/poweredby.svg'

//icons
import controlsPurple from '../../assets/icons/controls-purple.svg'
import shoppingCart from '../../assets/icons/shopping-cart-purple.svg'
import factoryPurple from '../../assets/icons/factory-purple.svg'
import boxPurple from '../../assets/icons/box-purple.svg'
import documentPurple from '../../assets/icons/document-purple.svg'
import chartPurple from '../../assets/icons/chart-purple.svg'
import shapesPurple from '../../assets/icons/shapes-purple.svg'
import gearPurple from '../../assets/icons/gear-purple.svg'
import pricingPurple from '../../assets/icons/pricing-label-purple.svg'
import peoplePurple from '../../assets/icons/people-purple.svg'


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      sideBarClass: '' //default is the shrink class
    }
  }  

  componentWillReceiveProps = nextProps => {    
    if (nextProps.menuSidebarCollapsed !== this.props.menuSidebarCollapsed) {
      let { menuSidebarCollapsed } = nextProps
      this.toggleMenu(menuSidebarCollapsed)
    }
  }



  handleClickOutside = evt => {
    let { dispatch, menuSidebarCollapsed } = this.props            
    if(!menuSidebarCollapsed) {
      dispatch(toggle_menu())
    }
  }

  toggleMenu = isCollapse => {
    if(isCollapse) {
      this.setState({sideBarClass: '' })
    } else {

      if($(window).width() >= 640) {
        this.setState({sideBarClass: 'is-transition-push' })
      } else {
        this.setState({sideBarClass: 'is-transition-push is-open' })
      }
    }    
  }
  
  sideBarMenuEvent = () => { 
    this.props.dispatch(toggle_menu())
  }

  render() {
    let { sideBarClass } = this.state   
    
    
    return  (
      
      <div id="app-dashboard-sidebar" className={`app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium ${sideBarClass}`} data-off-canvas>
        <div className="app-dashboard-sidebar-title-area">
          <div className="app-dashboard-close-sidebar">
            <img src={logo} className="icon logo" alt="logo"/>
            {/*<h3 className="app-dashboard-sidebar-block-title">
                Sidebar
              </h3>*/}

          </div>
          <div className="app-dashboard-open-sidebar">
            <button id="open-sidebar" className="app-dashboard-open-sidebar-button show-for-medium" onClick={this.sideBarMenuEvent.bind(this)} aria-label="open menu" type="button">
              <img src={logo} className="icon logo" alt="logo"/>
            </button>
          </div>
        </div>
        <div className="app-dashboard-sidebar-inner">
          <ul className="menu vertical dropdown">
            {this.props.sidebarButtons.map(function(obj) {              
              let isActive = ''
              let rows = []
              
              if(obj.isActive) {
                isActive = 'active'
              } 
              // dropMenu = <ul className="vertical dropdown menu" data-dropdown-menu><li><a href="#">Item 1</a></li></ul>

              let li =  <li key={obj.iconSrc} className={isActive}>
                          <a href="#" className="">
                            <div className="sidebar-list-wrapper">
                              <img src={obj.iconSrc} className='icon' alt=""/>
                              <span className="app-dashboard-sidebar-text">{obj.link_title}</span>  
                            </div>
                          </a>                        
                        </li>

              rows.push(li)

              return rows
            })}
          </ul>
        </div>
        <div className="app-dashboard-sidebar-footer">
          <img src={logo_footer} className="icon logo_footer" alt="logo_footer"/>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {  
  dispatch: PropTypes.func.isRequired  
}


Sidebar.defaultProps = {
  sidebarButtons: [
    {iconSrc: controlsPurple, link_title:"Dashboard", dropdown: false, isActive: false},
    {iconSrc: shoppingCart, link_title:"Orders", dropdown: false, isActive: true},
    {iconSrc: factoryPurple, link_title:"Companies", dropdown: true, isActive: false},
    {iconSrc: boxPurple, link_title:"Products", dropdown: false, isActive: false},
    {iconSrc: documentPurple, link_title:"Documents", dropdown: false, isActive: false},
    {iconSrc: chartPurple, link_title:"Pricing", dropdown: false, isActive: false},
    {iconSrc: shapesPurple, link_title:"Brands", dropdown: false, isActive: false},
    {iconSrc: gearPurple, link_title:"Settings", dropdown: true, isActive: false},
    {iconSrc: pricingPurple, link_title:"Reports", dropdown: false, isActive: false},
    {iconSrc: peoplePurple, link_title:"Account Users", dropdown: false, isActive: false},
  ]
}




function mapStateToProps(state) {    
  const { menuSidebarCollapsed } = state.sidebar
  
  return {
    menuSidebarCollapsed
  }
}

export default connect(mapStateToProps)(onClickOutside(Sidebar))