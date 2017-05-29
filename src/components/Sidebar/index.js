import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { changeBaz } from '../../actions'
import $ from 'jquery'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside' //module for listening to outside clicks
import { toggle_menu } from '../../actions'

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
            <h3 className="app-dashboard-sidebar-block-title">Sidebar</h3>
          </div>
          <div className="app-dashboard-open-sidebar">
            <button id="open-sidebar" className="app-dashboard-open-sidebar-button show-for-medium" onClick={this.sideBarMenuEvent.bind(this)} aria-label="open menu" type="button">
              <span aria-hidden="true"><a href="#"><i className="large fa fa-angle-double-right"></i></a></span>
            </button>
          </div>
        </div>
        <div className="app-dashboard-sidebar-inner">
          <ul className="menu vertical">
            <li><a href="#" className="is-active">
              <i className="large fa fa-institution"></i><span className="app-dashboard-sidebar-text">Buildings</span>
            </a></li>
            <li><a>
              <i className="large fa fa-hourglass"></i><span className="app-dashboard-sidebar-text">Time</span>
            </a></li>
            <li><a>
              <i className="large fa fa-industry"></i><span className="app-dashboard-sidebar-text">Industry</span>
            </a></li>            
          </ul>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {  
  dispatch: PropTypes.func.isRequired  
}



function mapStateToProps(state) {    
  const { menuSidebarCollapsed } = state.sidebar
  
  return {
    menuSidebarCollapsed
  }
}

export default connect(mapStateToProps)(onClickOutside(Sidebar))