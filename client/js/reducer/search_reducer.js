let searchReducer = {searchText: 'testing'}

const SearchReducer = (state = searchReducer, action) => {
  switch (action.type) {
    case 'SEARCH_JOB':
      return Object.assign({},state, action.data)
    default:
      return state
  }
}

export default SearchReducer
