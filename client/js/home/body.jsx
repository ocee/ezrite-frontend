import React from 'react'
import ClassNames from 'classnames'

class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="intro-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intro-message">
                                <h1>EZrite.com</h1>
                                <h3>Where it's EZ to find what you need.</h3>
                                <hr className="intro-divider"/>
                                <ul className="list-inline intro-social-buttons">
                                    <div className="col-sm-offset-2 col-sm-8 input-group input-group-lg">
                                      <input type="text" className="form-control" placeholder="Search..." aria-describedby="sizing-addon1"/>
                                      <span className="input-group-btn" id="sizing-addon1">
                                        <button className="btn btn-secondary" type="button">Find</button>
                                      </span>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
