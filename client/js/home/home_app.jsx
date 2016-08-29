import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import SearchReducer from './../reducer/search_reducer'
import "../../style/home.less"
import 'file-loader?name=[name].[ext]!../../template/home.html'

import Home from './home.jsx'

let store = createStore(SearchReducer)

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
