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
      
      <div className="row expanded app-dashboard-top-nav-bar flex-container">        
        <div className="columns flex-child-grow wireframe-box small-10">

          <button data-toggle="app-dashboard-sidebar" className="menu-icon hide-for-medium" onClick={this.navtopMenuEvent.bind(this)}></button>          
          <div className="columns flex-child-grow wireframe-box small-4 small-offset-8 hide-for-small-only">
            <select>
              <option value="husker">Husker</option>
              <option value="starbuck">Starbuck</option>
              <option value="hotdog">Hot Dog</option>
              <option value="apollo">Apollo</option>
            </select>
          </div>   
          
        </div>                
        <div className="columns flex-child-shrink wireframe-box small-2">          
          Name
        </div>                
      </div>      
    );
  }
}

TopNav.propTypes = {  
  dispatch: PropTypes.func.isRequired,  
}



export default connect()(TopNav)
