import React from 'react';
import PropTypes from 'prop-types';

import { Movies, Pagination } from '../../components';
import { reduxHelper } from '../../helpers';
import * as moviesActions from '../../actions/moviesActions';
import * as paginationActions from '../../actions/paginationActions';

const MainPage = ({ pagination, actions, movies }) => (
  <div className="main">
    <Pagination pagination={pagination} actions={actions} />
    <Movies movies={movies} />
  </div>
);

MainPage.propTypes = {
  pagination: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default reduxHelper(MainPage, {
  ...moviesActions,
  ...paginationActions
});
