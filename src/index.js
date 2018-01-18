import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { applyMiddleware, createStore } from 'redux';
import mychat from './reducers'
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware"
import { createLogger } from 'redux-logger'

const middleware = applyMiddleware(promise(), thunk, createLogger({collapsed:true}))

let store = createStore(mychat, middleware)

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
