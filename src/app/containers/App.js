import React, { Component } from 'react';

export default class App extends Component {
  render () {
    const { header, main } = this.props;
    return (
      <div>
        {header}
        {main}
      </div>
    );
  }
}
