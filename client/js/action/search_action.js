import $ from 'jquery'

let SearchAction = (dispatch) => {
  return {
    setViewState: function(view){
      dispatch({type: 'VIEW_CHANGE', data: {view: view}})
    },
    updateSearchText: function(searchText){
      dispatch({type: 'SEARCH_JOB', data:{searchText: searchText}})
    },
    jobTitleChange: function(title){
      dispatch({type: 'JOB_TITLE_CHANGE', data:{title: title}})
    },
    jobDescriptionChange: function(description){
      dispatch({type: 'JOB_DESCRIPTION_CHANGE', data:{description: description}})
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
    getJobDetail: function(jobId){

    },
    setJobDetail: function(job){
      dispatch({type: 'GET_JOB_DETAIL', data:job})
    },
    postJob: function(title, description){
      $.ajax({
        url: '/api/job',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({
          title: title,
          description: description
        }),
        success: response => {
          dispatch({type: 'JOB_POST_SUCCESS', data: response})
        }
      })
    },
    submitSearch: function(searchText){
      $.ajax({
        url: '/api/search?q=' + encodeURI(searchText),
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: response => {
          dispatch({type: 'VIEW_CHANGE', data: {view: 'search'}})
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
