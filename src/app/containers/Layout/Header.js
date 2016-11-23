import React, { Component } from 'react';
import { MovieSearch } from '../../components';
import { reduxHelper } from '../../helpers';
import * as moviesActions from '../../actions/moviesActions';

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <div className='header-nav'>
          <MovieSearch {...this.props} />
        </div>
      </header>
    );
  }
}

export default reduxHelper(Header, moviesActions);
