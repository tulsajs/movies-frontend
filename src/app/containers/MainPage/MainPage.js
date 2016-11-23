import React, { Component } from 'react';
import { Movies, Pagination } from '../../components';
import { reduxHelper } from '../../helpers';
import * as moviesActions from '../../actions/moviesActions';
import * as paginationActions from '../../actions/paginationActions';

class MainPage extends Component {
  render () {
    return (
      <div className='main'>
        <Pagination pagination={this.props.pagination} actions={this.props.actions} />
        <Movies movies={this.props.movies} />
      </div>
    );
  }
}

MainPage.propTypes = {
  pagination: React.PropTypes.object.isRequired,
  movies: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default reduxHelper(MainPage, {...moviesActions, ...paginationActions});
