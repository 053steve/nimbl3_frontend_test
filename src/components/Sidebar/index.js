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
              <span aria-hidden="true"><a href="#"><i className="large fa fa-angle-double-right"></i></a></span>
            </button>
          </div>
        </div>
        <div className="app-dashboard-sidebar-inner">
          <ul className="menu vertical">
            {this.props.sidebarButtons.map(function(obj) {
              return (

                <li key={obj.iconSrc}><a href="#" className="">
                  <img src={obj.iconSrc} className='icon' alt=""/>
                  <span className="app-dashboard-sidebar-text">{obj.link_title}</span>
                </a></li>
              )

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
    {iconSrc: controlsPurple, link_title:"Dashboard" },
    {iconSrc: shoppingCart, link_title:"Orders" },
    {iconSrc: factoryPurple, link_title:"Companies" },
    {iconSrc: boxPurple, link_title:"Products" },
    {iconSrc: documentPurple, link_title:"Documents" },
    {iconSrc: chartPurple, link_title:"Pricing" },
    {iconSrc: shapesPurple, link_title:"Brands" },
    {iconSrc: gearPurple, link_title:"Settings" },
    {iconSrc: pricingPurple, link_title:"Reports" },
    {iconSrc: peoplePurple, link_title:"Account Users" },
  ]
}




function mapStateToProps(state) {    
  const { menuSidebarCollapsed } = state.sidebar
  
  return {
    menuSidebarCollapsed
  }
}

export default connect(mapStateToProps)(onClickOutside(Sidebar))