import React, { Component } from 'react'
import { connect } from 'react-redux'

import Main from './Main'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/Top-Nav'
import './App.css'



class App extends Component {  

  render() {
    
    return  (

      <div className="app-dashboard shrink-medium">
        <div className="app-dashboard-body off-canvas-wrapper">
          <Sidebar/>
          <Main/>                    
        </div>
      </div>
    );
  }
}


export default connect()(App)
