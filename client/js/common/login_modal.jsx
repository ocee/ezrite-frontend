import React, { PropTypes }  from 'react'
import BootstrapJs from './../../style/bootstrap/js/bootstrap.min.js'

class LoginModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {view: 'login'};
        this.onRegisterClick = this.onRegisterClick.bind(this)
        this.onLoginClick = this.onLoginClick.bind(this)
        this.onRegisterSubmit = this.onRegisterSubmit.bind(this)
        this.onLoginSubmit = this.onLoginSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onRegistrationEmailChange = this.onRegistrationEmailChange.bind(this)
        this.onRegistrationPasswordChange = this.onRegistrationPasswordChange.bind(this)
        this.onLoginEmailChange = this.onLoginEmailChange.bind(this)
        this.onLoginPasswordChange = this.onLoginPasswordChange.bind(this)
        this.onSetView = this.onSetView.bind(this)
    }

    onRegisterClick(){
      this.setState({view: 'register'});
    }

    onLoginClick(){
      this.setState({view: 'login'});
    }

    onRegisterSubmit(){
      const{action, registrationData} = this.props
      action.submitRegister(registrationData)
    }

    onLoginSubmit(){
      const{action, loginData} = this.props
      action.submitLogin(loginData)
    }

    onNameChange(event){
      const{action} = this.props
      action.registrationNameChange(event.target.value)
    }

    onRegistrationEmailChange(event){
      const{action} = this.props
      action.registrationEmailChange(event.target.value)
    }

    onRegistrationPasswordChange(event){
      const{action} = this.props
      action.registrationPasswordChange(event.target.value)
    }

    onLoginEmailChange(event){
      const{action} = this.props
      action.loginEmailChange(event.target.value)
    }

    onLoginPasswordChange(event){
      const{action} = this.props
      action.loginPasswordChange(event.target.value)
    }

    onSetView(view){
      this.setState({view: view});
    }

    render() {
      const {userData} = this.props
      
      let registerContainer = <span>
                              <h1>Register A New Account</h1>
                              <br/>
                              <form>
                                  <input type="text" name="name" placeholder="Name" onChange={this.onNameChange}/>
                                  <input type="text" name="email" placeholder="Email" onChange={this.onRegistrationEmailChange}/>
                                  <input type="password" name="pass" placeholder="Password" onChange={this.onRegistrationPasswordChange}/>
                                  <input type="button" name="register" className="login loginmodal-submit" value="Register" onClick={this.onRegisterSubmit}/>
                              </form>
                            </span>,
          loginContainer = <span>
                                <h1>Login To Your Account</h1>
                                <br/>
                                <form>
                                    <input type="text" name="email" placeholder="Email" onChange={this.onLoginEmailChange}/>
                                    <input type="password" name="pass" placeholder="Password" onChange={this.onLoginPasswordChange}/>
                                    <input type="button" name="login" className="login loginmodal-submit" value="Login" onClick={this.onLoginSubmit}/>
                                </form>
                              </span>,
          loginLink = <a href="#" onClick={this.onLoginClick}>Login</a>,
          registerLink = <a href="#" onClick={this.onRegisterClick}>Register</a>,
          userContainer = null,
          userLink = null

          if(this.state.view === 'login'){
            userContainer = loginContainer
            userLink = registerLink
          }else{
            userContainer = registerContainer
            userLink = loginLink
          }



        return (
            <div className="modal fade" id="login-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="loginmodal-container">
                        {userContainer}
                        <div className="login-help">
                            {userLink}
                            -
                            <a href="#">Forgot Password</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LoginModal.propTypes = {
  // reducer: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
}

export default LoginModal;
