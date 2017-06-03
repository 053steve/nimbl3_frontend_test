import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from './Main'
import Sidebar from '../components/Sidebar'
import './App.css'
import $ from 'jquery'
import foundation from 'foundation-sites'

const sidebarShrinkClass = 'shrink-medium'
const sidebarExpandClass = 'shrink-large'

const windowOverlayClass = 'overlay'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {      
      shrinkerClass: sidebarShrinkClass,
      overlayClass: ''     
    }
  }  

  componentWillReceiveProps = nextProps => {    
    if (nextProps.menuSidebarCollapsed !== this.props.menuSidebarCollapsed) {
      let { menuSidebarCollapsed } = nextProps
      this.toggleMenu(menuSidebarCollapsed)
    }


    if (nextProps.inputFocusStatus !== this.props.inputFocusStatus) {
      let { inputFocusStatus } = nextProps
      this.overlayWindow(inputFocusStatus)
    }
  }

  overlayWindow = isOverlay => {
    (isOverlay) ? this.setState({overlayClass: windowOverlayClass }) : this.setState({overlayClass: '' })
  }


  toggleMenu = isCollapse => {  
    (isCollapse) ? this.setState({shrinkerClass: sidebarShrinkClass }) : this.setState({shrinkerClass: sidebarExpandClass })
  }

  componentDidMount() {
    $(document).foundation()
  }

  render() {
    let { shrinkerClass, overlayClass} = this.state
    return  (
      <div className={`app-dashboard ${shrinkerClass}`}>
        <div className="app-dashboard-body off-canvas-wrapper">
          <div className={overlayClass}></div> 
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
  const { inputFocusStatus } = state.textInput
  
  return {
    menuSidebarCollapsed,
    inputFocusStatus
  }
}

export default connect(mapStateToProps)(App)


