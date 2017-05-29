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

  // componentWillMount() {
  //   console.log(this.props)
  //   console.log(this.state)
  // }

  componentWillReceiveProps(nextProps) {
    
    // console.log(nextProps)
    // if (nextProps.changeBaz !== this.props.changeBaz) {
    //   const { dispatch, selectedReddit } = nextProps
    //   dispatch(fetchPostsIfNeeded(selectedReddit))
    // }
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log('next props')
  }

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

// function mapStateToProps(state) {  
//   const { changeBaz } = state
  
//   return {
//     changeBaz
//   }
// }

// export default connect(mapStateToProps)(Main)

export default connect()(Main)
