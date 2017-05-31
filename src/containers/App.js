import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from './Main'
import Sidebar from '../components/Sidebar'
import './App.css'

import $ from 'jquery'
import foundation from 'foundation-sites'
// import { foundation } from 'foundation-sites/js/foundation.core'
// import 'foundation-sites/js/foundation.util.mediaQuery';

const sidebarShrinkClass = 'shrink-medium'
const sidebarExpandClass = 'shrink-large'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {      
      shrinkerClass: sidebarShrinkClass
    }
  }  

  componentWillReceiveProps = nextProps => {
        
    if (nextProps.menuSidebarCollapsed !== this.props.menuSidebarCollapsed) {
      let { menuSidebarCollapsed } = nextProps
      this.toggleMenu(menuSidebarCollapsed)
    }
  }

  toggleMenu = isCollapse => {  
    (isCollapse) ? this.setState({shrinkerClass: sidebarShrinkClass }) : this.setState({shrinkerClass: sidebarExpandClass })
  }

  componentDidMount() {
    $(document).foundation()
  }

  render() {
    let { shrinkerClass } = this.state
    return  (
      <div className={`app-dashboard ${shrinkerClass}`}>
        <div className="app-dashboard-body off-canvas-wrapper">
          <Sidebar/>
          <Main/>                    
        </div>
      </div>
    );
  }
}

App.propTypes = {  
  dispatch: PropTypes.func.isRequired,  
}


function mapStateToProps(state) {    
  const { menuSidebarCollapsed } = state.sidebar
  
  return {
    menuSidebarCollapsed
  }
}

export default connect(mapStateToProps)(App)


