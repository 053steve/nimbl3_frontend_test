import React, { Component } from 'react'
import Order from '../Order'
import TopNav from '../../components/Top-Nav'
import Footer from '../../components/Footer'

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
        </div>
        <Footer/>

      </div>
    );
  }
}


export default Main
