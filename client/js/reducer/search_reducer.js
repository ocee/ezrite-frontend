let searchReducer = {
  searchData: null,
  registrationData: null,
  loginData: null,
  userData: null,
  viewData: null,
  jobPostData: null,
  jobDetail: null
}

const SearchReducer = (state = searchReducer, action) => {
  let currentState = null;

  switch (action.type) {
    case 'GET_JOB_DETAIL':
      return Object.assign({},state , {jobDetail: action.data})
    case 'JOB_TITLE_CHANGE':
      currentState = state.jobPostData ? state.jobPostData : {}
      return Object.assign({}, state, {jobPostData: {title: action.data.title, description: currentState.description}})
    case 'JOB_DESCRIPTION_CHANGE':
      currentState = state.jobPostData ? state.jobPostData : {}
      return Object.assign({}, state, {jobPostData: {title: currentState.title, description: action.data.description}})
    case 'JOB_POST_SUCCESS':
      return Object.assign({}, state, {jobPostData: action.data})
    case 'VIEW_CHANGE':
      currentState = state.viewData ? state.viewData : {}
      return Object.assign({},state , Object.assign(currentState, {viewData: action.data}))
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
