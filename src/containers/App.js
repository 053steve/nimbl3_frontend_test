import React, { Component } from 'react'
import { connect } from 'react-redux'
import Test from './Test'
import {
  Route,
} from 'react-router-dom';





class App extends Component {
  

  render() {
    
    return  (
      <div>
        <Route pattern="/:word" component={Test} />
      </div>

    );
  }
}


export default connect()(App)
