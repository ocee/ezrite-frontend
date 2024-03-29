import React from 'react'
import ClassNames from 'classnames'

import List from './list.jsx'

class Body extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {searchData, history, action} = this.props
        let list = null

        if (searchData && searchData.searchResult) {
            list = searchData.searchResult.map(function(listValue) {
                return <List data={listValue} history={history} action={action}/>;
            })
        } else {
            list = null
        }
        return (
            <ul className="content-container">
                {list}
            </ul>
        )
    }
}

export default Body
