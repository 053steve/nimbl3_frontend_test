import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggle_menu } from '../../actions'

// import $ from 'jquery'

class TopNav extends Component {  
    

  navtopMenuEvent = () => {    
    this.props.dispatch(toggle_menu())
  }

  // componentDidMount = () => {
  //   $(document).foundation()
  // }


  render() {
    
    return  (
      
      <div className="row expanded app-dashboard-top-nav-bar flex-container cards top-bar align-right">
        <div className="top-bar-left">
          <button data-toggle="app-dashboard-sidebar" className="menu-icon hide-for-medium" onClick={this.navtopMenuEvent.bind(this)}></button>          
        </div>        
        <div className="top-bar-right">
        <div className="columns flex-child-shrink small-6">          

          <ul className="dropdown menu" data-dropdown-menu>          
            <li id="top-nav-select-wrapper">
              <select id="top-nav-select">
                <option  value="" selected disabled>English (US)</option>
                <option value="">Starbuck</option>
                <option value="">Hot Dog</option>
                <option value="">Apollo</option>
              </select>
            </li>          
            <li id="top-nav-dropdown">
                <a href="#">                  
                  <span><div id="profile-name">Hello Steve</div></span>
                  <span>Demo Shop</span>
                </a>
                <ul className="menu vertical">
                  <li><a href="#">menu1</a></li>
                  <li><a href="#">menu2</a></li>
                  <li><a href="#">menu3</a></li>
                </ul>
            </li>
            
          </ul>
        </div>                
        </div>
      </div>      
    );
  }
}

TopNav.propTypes = {  
  dispatch: PropTypes.func.isRequired,  
}



export default connect()(TopNav)