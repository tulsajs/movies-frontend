import React from 'react';
import { MovieSearch } from '../../components';
import { reduxHelper } from '../../helpers';
import * as moviesActions from '../../actions/moviesActions';

const Header = props => (
  <header className="header">
    <MovieSearch {...props} />
  </header>
);

export default reduxHelper(Header, moviesActions);
