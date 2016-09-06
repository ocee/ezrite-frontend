import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import configureStore from './../store/home_store'
// import SearchReducer from './../reducer/search_reducer'
import "../../style/home.less"

import Home from './home.jsx'

let store = configureStore(typeof userData === "undefined" ? {} : userData)

class HomeApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}

render(<HomeApp/>, document.getElementById('app'))
