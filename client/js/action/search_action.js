import $ from 'jquery'

let SearchAction = (dispatch) => {
  return {
    searchText: function(searchText){
      dispatch({type: 'SEARCH_JOB', data:{searchText: searchText}})
    },
    userNameChange: function(name){
      dispatch({type: 'NAME_CHANGE', data:{name: name}})
    },
    userEmailChange: function(email){
      dispatch({type: 'EMAIL_CHANGE', data:{email: email}})
    },
    userPasswordChange: function(password){
      dispatch({type: 'PASSWORD_CHANGE', data:{password: password}})
    },
    submitSearch: function(searchText){
      window.location = 'search?q=' + searchText
    },
    submitRegister: function(userData){
      // var options = {
      //   url: '/api/user/register',
      //   headers: { 'User-Agent': 'request' },
      //   json: userData
      // };

      // $.post('/api/user/register', userData, (event)=>{
      //
      // }, 'json')
      $.ajax({
        url: '/api/user/register',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(userData)
      })

    },
    submitLogin: function(){

    },
    changeLoginView: function(view){
      dispatch({type: 'CHANGE_LOGIN_VIEW', data:{view: view}})
    }
  }
}

export default SearchAction
