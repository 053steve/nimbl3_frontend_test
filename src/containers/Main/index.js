import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { changeBaz } from '../../actions'
import Test from '../Test'
import Order from '../Order'
import TopNav from '../../components/Top-Nav'

import {
  Route,
} from 'react-router-dom'




class Main extends Component {  

  
  render() {
    
    return  (      
      <div className="app-dashboard-body-content off-canvas-content" data-off-canvas-content>
        <TopNav/>
        <Route exact path="/" component={Order} />
        <Route path="/test" component={Test} />
      </div>
    );
  }
}


export default Main
