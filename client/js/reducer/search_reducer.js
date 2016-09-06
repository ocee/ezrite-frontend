let searchReducer = {
  searchData: null,
  registrationData: null,
  loginData: null,
  userData: null
}

const SearchReducer = (state = searchReducer, action) => {
  let currentState = null;

  switch (action.type) {
    case 'SEARCH_RESULTS':
      currentState = state.searchData ? state.searchData : {}
      return Object.assign({},state , Object.assign(currentState, {searchData: action.data}))
    case 'LOGOUT_SUCCESS':
      state.userData = null
      return Object.assign({},state)
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      currentState = state.userData ? state.userData : {}
      return Object.assign({},state , {userData: Object.assign(currentState, action.data)})
    case 'SEARCH_JOB':
      currentState = state.searchData ? state.searchData : {}
      return Object.assign({},state , Object.assign(currentState, {searchData: action.data}))
    case 'REGISTRATION_NAME_CHANGE':
    case 'REGISTRATION_EMAIL_CHANGE':
    case 'REGISTRATION_PASSWORD_CHANGE':
      currentState = state.registrationData ? state.registrationData : {}
      return Object.assign({},state , {registrationData: Object.assign(currentState, action.data)})
    case 'LOGIN_EMAIL_CHANGE':
    case 'LOGIN_PASSWORD_CHANGE':
      currentState = state.loginData ? state.loginData : {}
      return Object.assign({},state , {loginData: Object.assign(currentState, action.data)})
    default:
      return state
  }
}

export default SearchReducer
