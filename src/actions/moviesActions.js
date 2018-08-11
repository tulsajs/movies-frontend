import * as types from '../constants/ActionTypes';

export function queryMovies(query) {
  return (dispatch, getState) =>
    fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=${
        process.env.REACT_APP_API_KEY
      }&query=${query}`
    )
      .then(res => res.json())
      .then(data => {
        dispatch({ type: types.SET_MOVIES, data });
        dispatch({ type: types.SET_PAGINATION, data, query });
      });
}
