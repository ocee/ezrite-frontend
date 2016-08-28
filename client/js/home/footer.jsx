import React from 'react'
import ClassNames from 'classnames'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="list-inline">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li className="footer-menu-divider">⋅</li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li className="footer-menu-divider">⋅</li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li className="footer-menu-divider">⋅</li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                            <p className="copyright text-muted small">Copyright © Your Company 2014. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
