import React, { Component } from 'react'

class TopNav extends Component {
  

  render() {
    
    return  (
      
      <div className="row expanded app-dashboard-top-nav-bar">
        <div className="columns medium-2">
          <button data-toggle="app-dashboard-sidebar" className="menu-icon hide-for-medium"></button>
          <a className="app-dashboard-logo">Foundation</a>
        </div>
        <div className="columns show-for-medium">
          <div className="app-dashboard-search-bar-container">
            <input className="app-dashboard-search" type="search" placeholder="Search"/>
            <i className="app-dashboard-search-icon fa fa-search"></i>
          </div>
        </div>
        <div className="columns shrink app-dashboard-top-bar-actions">
          <button href="#" className="button hollow">Logout</button>
          <a href="#" height="30" width="30" alt=""><i className="fa fa-info-circle"></i></a>
        </div>
      </div>
    );
  }
}


export default TopNav;
