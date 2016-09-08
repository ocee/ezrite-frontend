import $ from 'jquery'

let SearchAction = (dispatch) => {
  return {
    updateSearchText: function(searchText){
      dispatch({type: 'SEARCH_JOB', data:{searchText: searchText}})
    },
    registrationNameChange: function(name){
      dispatch({type: 'REGISTRATION_NAME_CHANGE', data:{name: name}})
    },
    registrationEmailChange: function(email){
      dispatch({type: 'REGISTRATION_EMAIL_CHANGE', data:{email: email}})
    },
    registrationPasswordChange: function(password){
      dispatch({type: 'REGISTRATION_PASSWORD_CHANGE', data:{password: password}})
    },
    loginEmailChange: function(email){
      dispatch({type: 'LOGIN_EMAIL_CHANGE', data:{email: email}})
    },
    loginPasswordChange: function(password){
      dispatch({type: 'LOGIN_PASSWORD_CHANGE', data:{password: password}})
    },
    submitSearch: function(searchText){
      $.ajax({
        url: '/api/search?q=' + encodeURI(searchText),
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: response => {
          dispatch({type: 'SEARCH_RESULTS', data: {searchResult:response}})
        }
      })
    },
    submitRegister: function(registrationData){
      $.ajax({
        url: '/api/user/register',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({
          email: registrationData.email,
          password: registrationData.password,
          profile: {name: registrationData.name}

        }),
        success: response => {
          dispatch({type: 'REGISTER_SUCCESS', data: response})
        }
      })

    },
    submitLogin: function(loginData){
      $.ajax({
        url: '/api/user/login',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({
          email: loginData.email,
          password: loginData.password
        }),
        success: response => {
          dispatch({type: 'LOGIN_SUCCESS', data: response})
        }
      })
    },
    submitSignOut: function(){
      $.ajax({
        url: '/api/user/logout',
        type: 'GET',
        success: response => {
          dispatch({type: 'LOGOUT_SUCCESS'})
        }
      })
    }
  }
}

export default SearchAction
