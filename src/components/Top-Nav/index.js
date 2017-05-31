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
      
      <div className="row expanded app-dashboard-top-nav-bar flex-container cards top-bar">        

        <div className="columns flex-child-grow small-10">
          
          <button data-toggle="app-dashboard-sidebar" className="menu-icon hide-for-medium" onClick={this.navtopMenuEvent.bind(this)}></button>          
          <div className="columns flex-child-grow small-4 small-offset-8 hide-for-small-only top-nav-select">
            
            <select>
              <option  value="" selected disabled>English (US)</option>
              <option value="">Starbuck</option>
              <option value="">Hot Dog</option>
              <option value="">Apollo</option>
            </select>
          </div>   
          
        </div>                
        <div className="columns flex-child-shrink small-2 top-nav-dropdown">          
          Hello Steve
          
        </div>                
      </div>      
    );
  }
}

TopNav.propTypes = {  
  dispatch: PropTypes.func.isRequired,  
}



export default connect()(TopNav)
1