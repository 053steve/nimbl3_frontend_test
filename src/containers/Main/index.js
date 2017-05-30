import React, { Component } from 'react'
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
        <div className="page-wrapper">        
          <Route exact path="/" component={Order} />
          <Route path="/test" component={Test} />
        </div>
      </div>
    );
  }
}


export default Main
