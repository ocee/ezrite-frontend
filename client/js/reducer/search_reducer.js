import _ from 'lodash'

let searchReducer = {}

const SearchReducer = (state = searchReducer, action) => {
  switch (action.type) {
    case 'searchJobs':
      return _.assign(state, action.data)
    default:
      return state
  }
}

export default SearchReducer
