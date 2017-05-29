import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { changeBaz } from '../../actions'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside' //module for listening to outside clicks
import { toggle_menu } from '../../actions'

const sidebarShinkClass = 'app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium'
const sidebarExpandClass= 'app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium is-transition-push is-open'


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      sideBarClass: sidebarShinkClass
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
    (isCollapse) ? this.setState({sideBarClass: sidebarShinkClass }) : this.setState({sideBarClass: sidebarExpandClass })
  }
  
  sideBarMenuEvent = () => {    
    this.props.dispatch(toggle_menu())
  }




  render() {
    let { sideBarClass } = this.state   
    
    
    return  (
      <div id="sidebar">
        <div id="app-dashboard-sidebar" className={sideBarClass} data-off-canvas>
          <div className="app-dashboard-sidebar-title-area">
            <div className="app-dashboard-close-sidebar">
              <h3 className="app-dashboard-sidebar-block-title">Items</h3>
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