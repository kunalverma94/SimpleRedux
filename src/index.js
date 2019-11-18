import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { ss } from './Redux'

ReactDOM.render(
  <Provider store={ss}>
    <App />
  </Provider>,
  document.getElementById('root')
)
