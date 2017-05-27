import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { Router, Route } from 'react-router'
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom'
// import browserHistory from 'history/createBrowserHistory'

import App from './containers/App'
import Test from './containers/Test'
// import LayoutDashboard from './containers/LayoutDashboard'
// import LayoutMain from './containers/LayoutMain'
import registerServiceWorker from './registerServiceWorker';
import './index.css';


// import Login from './containers/Login'
// import Login2 from './containers/Login2'
// import Reddit from './containers/Reddit'
// import Dashboard from './containers/Dashboard'
// import User from './containers/User'
import configureStore from './store/configureStore'
// import AuthService from './utils/AuthService'

export const store = configureStore()


render(
  <Provider store={store}>
    <Router>      
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)


// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';




// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
