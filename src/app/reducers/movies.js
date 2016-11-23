import * as types from '../constants/ActionTypes';

const movies = {};

export default function reducer (state = movies, action) {
  switch (action.type) {
    case types.SET_MOVIES:
      return {
        ...action.data.results
      };
    default:
      return state;
  }
}
