import React, { Component } from 'react'
import { connect } from 'react-redux'
import Test from './Test'
import Order from './Order'
import Sidebar from '../components/Sidebar'
import {
  Route,
} from 'react-router-dom';



class App extends Component {
  

  render() {
    
    return  (
      <div>
        <Sidebar/>
        <Route exact path="/" component={Test} />
        <Route path="/order" component={Order} />
      </div>

    );
  }
}


export default connect()(App)
