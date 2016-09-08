import React from 'react'
import ClassNames from 'classnames'
import Humanname from 'humanname'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this)
  }

  onSignOut(){
    const {action} = this.props
    action.submitSignOut()
  }

  render() {
    const {userData} = this.props
    let userContainer = null

    if(!userData){
      userContainer = <li>
                        <a href="#" data-toggle="modal" data-target="#login-modal">Login</a>
                      </li>
    }else{
      let firstName = Humanname.parse(userData.profile.name).firstName
      userContainer = <li>
                        <a href="#" id="dropdownMenu1" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{firstName}</a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#" onClick={this.onSignOut}>Sign Out</a></li>
                          </ul>
                      </li>
    }

    return (
      <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div className="container topnav">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand topnav" href="#">EZrite.com</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    {userContainer}
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default Header;

// Header.propTypes = { initialCount: React.PropTypes.number };
// Header.defaultProps = { initialCount: 0 };
