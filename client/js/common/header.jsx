import React from 'react'
import ClassNames from 'classnames'
import Humanname from 'humanname'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onSignOut = this.onSignOut.bind(this)
        this.onSubmitSearch = this.onSubmitSearch.bind(this)
        this.onSearchTextChange = this.onSearchTextChange.bind(this)
    }

    onSignOut() {
        const {action} = this.props
        action.submitSignOut()
    }

    onSearchTextChange(event){
      const {action} = this.props
      action.updateSearchText(event.target.value)
    }

    onSubmitSearch(event){
      const {action, searchData} = this.props
      action.submitSearch(searchData.searchText)
    }

    render() {
        const {userData} = this.props
        let userContainer = null

        if (!userData) {
            userContainer = <li>
                <a href="#" data-toggle="modal" data-target="#login-modal">Login</a>
            </li>
        } else {
            let firstName = Humanname.parse(userData.profile.name).firstName
            userContainer = <li>
                <a href="#" id="dropdownMenu1" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{firstName}</a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a href="#" onClick={this.onSignOut}>Sign Out</a>
                    </li>
                </ul>
            </li>
        }

        return (
            <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
                <div className="container topnav">
                    <div className="col-xs-4">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand topnav" href="#">EZrite.com</a>
                        </div>
                    </div>
                    <div className="col-xs-4">
                      <div className="input-group input-group-sm header-search">
                        <input type="text" className="form-control" placeholder="Search..." aria-describedby="sizing-addon1" onChange={this.onSearchTextChange}/>
                        <span className="input-group-btn" id="sizing-addon1">
                          <button className="btn btn-secondary" type="button" onClick={this.onSubmitSearch}>Find</button>
                        </span>
                      </div>
                    </div>
                    <div className="col-xs-4">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <button type="button" className="btn btn-primary header-button" data-toggle="modal" data-target="#job-modal">Post</button>
                                </li>
                                {userContainer}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;

// Header.propTypes = { initialCount: React.PropTypes.number };
// Header.defaultProps = { initialCount: 0 };
