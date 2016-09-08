import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux'
import {
    routerReducer
} from 'react-router-redux'
import SearchReducer from './../reducer/search_reducer'



export default function configureStore(preloadedState) {
    const store = createStore(
        combineReducers({
            SearchReducer,
            preloadedState,
            routing: routerReducer
        })
    )

    return store
}
