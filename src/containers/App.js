import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from './Main'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/Top-Nav'
import './App.css'

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


