import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggle_menu } from '../../actions'

class TopNav extends Component {  
    

  navtopMenuEvent = () => {    
    this.props.dispatch(toggle_menu())
  }


  render() {
    
    return  (
      
      <div className="row expanded app-dashboard-top-nav-bar ">
        <div className="columns medium-2">
          <button data-toggle="app-dashboard-sidebar" className="menu-icon hide-for-medium" onClick={this.navtopMenuEvent.bind(this)}></button>
          <a className="app-dashboard-logo">Foundation</a>
        </div>        
        <div className="columns shrink app-dashboard-top-bar-actions">
          <button href="#" className="button hollow">Logout</button>
          <a href="#" height="30" width="30" alt=""><i className="fa fa-info-circle"></i></a>
        </div>
      </div>
    );
  }
}

TopNav.propTypes = {  
  dispatch: PropTypes.func.isRequired,  
}



// export default TopNav;

export default connect()(TopNav)
