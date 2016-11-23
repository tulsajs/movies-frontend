import * as types from '../constants/ActionTypes';

export function nextPage () {
  return (dispatch, getState) => {
    const page = getState().pagination.current_page + 1;
    const query = getState().pagination.query;
    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch({type: types.SET_MOVIES, data: response});
      dispatch({type: types.SET_PAGE, page: page});
    });
  };
}

export function previousPage () {
  return (dispatch, getState) => {
    const page = getState().pagination.current_page - 1;
    const query = getState().pagination.query;
    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch({type: types.SET_MOVIES, data: response});
      dispatch({type: types.SET_PAGE, page: page});
    });
  };
}

export function goToPage (page) {
  return (dispatch, getState) => {
    const query = getState().pagination.query;
    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch({type: types.SET_MOVIES, data: response});
      dispatch({type: types.SET_PAGE, page: page});
    });
  };
}
