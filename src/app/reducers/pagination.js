import * as types from '../constants/ActionTypes';

const pagination = {current_page: 0, total_pages: 0, query: ''};

export default function reducer (state = pagination, action) {
  switch (action.type) {
    case types.SET_PAGINATION:
      return {
        current_page: action.data.page,
        total_pages: action.data.total_pages,
        query: action.query
      };
    case types.SET_PAGE:
      return {
        ...state,
        current_page: action.page
      };
    default:
      return state;
  }
}
