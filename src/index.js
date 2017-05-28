import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { 
  BrowserRouter as Router   
} from 'react-router-dom'

import App from './containers/App'

import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore'

export const store = configureStore()


render(
  <Provider store={store}>
    <Router>
        <App/>                  
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();