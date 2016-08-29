let SearchAction = (dispatch) => {
  return {
    searchText: function(searchText){
      dispatch({type: 'SEARCH_JOB', data:{searchText: searchText}})
    },
    submitSearch: function(searchText){
      window.location = 'search?q=' + searchText
    }
  }
}

export default SearchAction
