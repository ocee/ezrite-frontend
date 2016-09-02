let searchReducer = {
  searchData: {searchText: ''},
  userData: {view: 'login'}
}

const SearchReducer = (state = searchReducer, action) => {
  switch (action.type) {
    case 'SEARCH_JOB':
      return Object.assign({},state , Object.assign(state.searchData, {searchData: action.data}))
    case 'CHANGE_LOGIN_VIEW':
      return Object.assign({},state , {userData: Object.assign(state.userData, action.data)})
    case 'NAME_CHANGE':
      return Object.assign({},state , {userData: Object.assign(state.userData, action.data)})
    case 'EMAIL_CHANGE':
      return Object.assign({},state , {userData: Object.assign(state.userData, action.data)})
    case 'PASSWORD_CHANGE':
      return Object.assign({},state , {userData: Object.assign(state.userData, action.data)})
    default:
      return state
  }
}

export default SearchReducer
