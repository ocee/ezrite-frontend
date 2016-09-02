import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
// import api from '../middleware/api'
import rootReducer from './../reducer/search_reducer'
// import DevTools from '../containers/DevTools'

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState
  )

  /*if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }*/

  return store
}
