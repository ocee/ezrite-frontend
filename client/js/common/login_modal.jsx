import React, { PropTypes }  from 'react'
import BootstrapJs from './../../style/bootstrap/js/bootstrap.min.js'

class LoginModal extends React.Component {

    constructor(props) {
        super(props)
        this.onRegisterClick = this.onRegisterClick.bind(this)
        this.onLoginClick = this.onLoginClick.bind(this)
        this.onRegisterSubmit = this.onRegisterSubmit.bind(this)
        this.onLoginSubmit = this.onLoginSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
    }

    onRegisterClick(){
      const{action} = this.props
      action.changeLoginView('register')
    }

    onLoginClick(){
      const{action} = this.props
      action.changeLoginView('login')
    }

    onRegisterSubmit(){
      const{action} = this.props
      action.submitRegister()
    }

    onLoginSubmit(){
      const{action} = this.props
      action.submitLogin()
    }

    onNameChange(event){
      const{action} = this.props
      action.userNameChange(event.target.value)
    }

    onEmailChange(event){
      const{action} = this.props
      action.userEmailChange(event.target.value)
    }

    onPasswordChange(event){
      const{action} = this.props
      action.userPasswordChange(event.target.value)
    }

    render() {
      const {userData} = this.props.reducer
      console.log(this.props.reducer)
      let registerContainer = <span>
                              <h1>Register</h1>
                              <br/>
                              <form>
                                  <input type="text" name="name" placeholder="Name" onChange={this.onNameChange}/>
                                  <input type="text" name="email" placeholder="Email" onChange={this.onEmailChange}/>
                                  <input type="password" name="pass" placeholder="Password" onChange={this.onPasswordChange}/>
                                  <input type="submit" name="register" className="login loginmodal-submit" value="Register" onClick={this.onRegisterSubmit}/>
                              </form>
                            </span>,
          loginContainer = <span>
                                <h1>Login to Your Account</h1>
                                <br/>
                                <form>
                                    <input type="text" name="email" placeholder="Email" onChange={this.onEmailChange}/>
                                    <input type="password" name="pass" placeholder="Password" onChange={this.onPasswordChange}/>
                                    <input type="submit" name="login" className="login loginmodal-submit" value="Login" onClick={this.onLoginSubmit}/>
                                </form>
                              </span>,
          loginLink = <a href="#" onClick={this.onLoginClick}>Login</a>,
          registerLink = <a href="#" onClick={this.onRegisterClick}>Register</a>,
          userContainer = null,
          userLink = null

          if(userData.view === 'login'){
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
  reducer: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
}

export default LoginModal;
