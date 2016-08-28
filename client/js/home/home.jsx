import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import SearchReducer from './../reducer/search_reducer'
import "../../style/home.less"
import 'file-loader?name=[name].[ext]!../../template/home.html'

import Header from './header.jsx'
import Body from './body.jsx'
import Footer from './footer.jsx'

let store = createStore(SearchReducer)

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <Body/>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

render(
    <App/>, document.getElementById('app'))
