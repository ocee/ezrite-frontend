let SearchAction = (dispatch) => {
  return {
    searchText: function(searchText){
      dispatch({type: 'SEARCH_JOB', data:{searchText: searchText}})
    }
  }
}

export default SearchAction
