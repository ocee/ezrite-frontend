import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, Redirect, Link, IndexRedirect, browserHistory } from 'react-router'

import configureStore from './../store/home_store'
import "../../style/home.less"
import Home from './home.jsx'
import HomeBody from './body.jsx'
import SearchBody from './../search/body.jsx'

let store = configureStore(typeof userData === "undefined" ? {} : userData)
const history = syncHistoryWithStore(browserHistory, store)

render(<Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Home}>
              <IndexRedirect to="home" />
              <Route path="home" component={HomeBody}/>
              <Route path="search" component={SearchBody}/>
            </Route>
          </Router>
      </Provider>, document.getElementById('app'))
