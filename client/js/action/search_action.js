import { connect } from 'react-redux'
import { addTodo } from '../actions'

let SearchAction = ({ dispatch }) => {
  return {
    searchJobs: function(searchText){
      dispatch({type: 'SEARCH_JOB', data:{text: searchText}}) 
    }
  }
}

SearchAction = connect()(SearchAction)

export default SearchAction
