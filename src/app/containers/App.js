import React, { Component } from 'react';

export default class App extends Component {
  render () {
    const { header, main } = this.props;
    return (
      <div className='container'>
        {header}
        {main}
      </div>
    );
  }
}

App.propTypes = {
  header: React.PropTypes.object.isRequired,
  main: React.PropTypes.object.isRequired
};
