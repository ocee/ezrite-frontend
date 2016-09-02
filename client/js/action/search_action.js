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
    submitRegister: function(searchText){

    },
    submitLogin: function(searchText){

    },
    changeLoginView: function(view){
      dispatch({type: 'CHANGE_LOGIN_VIEW', data:{view: view}})
    }
  }
}

export default SearchAction
