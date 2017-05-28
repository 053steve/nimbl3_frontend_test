import React, { Component } from 'react'

class Sidebar extends Component {
  

  render() {
    
    return  (
      
      <div id="app-dashboard-sidebar" className="app-dashboard-sidebar position-left off-canvas off-canvas-absolute reveal-for-medium" data-off-canvas>
        <div className="app-dashboard-sidebar-title-area">
          <div className="app-dashboard-close-sidebar">
            <h3 className="app-dashboard-sidebar-block-title">Items</h3>
            
            <button id="close-sidebar" data-app-dashboard-toggle-shrink className="app-dashboard-sidebar-close-button show-for-medium" aria-label="Close menu" type="button">
              <span aria-hidden="true"><a href="#"><i className="large fa fa-angle-double-left"></i></a></span>
            </button>
          </div>
          <div className="app-dashboard-open-sidebar">
            <button id="open-sidebar" data-app-dashboard-toggle-shrink className="app-dashboard-open-sidebar-button show-for-medium" aria-label="open menu" type="button">
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


export default Sidebar;
