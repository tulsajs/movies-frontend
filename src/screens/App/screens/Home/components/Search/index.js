import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { Input, Box } from 'BuildingBlocks';

export default class index extends Component {
  setupEvent = event => {
    event.persist();
    this.handleChange(event);
  };

  handleChange = debounce(event => {
    const value = event.target.value === '' ? null : event.target.value;
    this.props.updateSearch(value);
  }, 500);

  render() {
    return (
      <Box width={[1, 1 / 2]} py={3}>
        <Input
          p={2}
          fontSize={3}
          width={1}
          type="text"
          placeholder="Search Movies"
          onChange={this.setupEvent}
        />
      </Box>
    );
  }
}
