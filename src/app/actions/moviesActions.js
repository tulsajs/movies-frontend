import * as types from '../constants/ActionTypes';

export function queryMovies (query) {
  return (dispatch, getState) => {
    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=${API_KEY}&query=${query}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch({type: types.SET_MOVIES, data: response});
      dispatch({type: types.SET_PAGINATION, data: response, query: query});
    });
  };
}
