import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from './reducers'

import logger from 'redux-logger'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import registerServiceWorker from './registerServiceWorker';

import Landing from './containers/landing/landing';
import Chat from './containers/chat/chat';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const middlewares = [
  routerMiddleware(history),
  promiseMiddleware(),
  thunk,
  logger
]

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(...middlewares)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/'))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/chat" component={Chat} />
        </div>
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();