import React, { Component } from 'react';
import { Flex } from 'BuildingBlocks';

export default class index extends Component {
  handleClick = page => {
    this.props.updatePage(page);
  };
  render() {
    const { page, totalPages } = this.props;
    return (
      <Flex justifyContent="center" alignItems="center" p={1}>
        <button disabled={totalPages === 1} onClick={() => this.handleClick(1)}>
          First
        </button>

        {page - 1 !== 0 && (
          <button onClick={() => this.handleClick(page - 1)}>{page - 1}</button>
        )}

        <button onClick={() => this.handleClick(page)}>{page}</button>

        {page + 1 <= totalPages && (
          <button onClick={() => this.handleClick(page + 1)}>{page + 1}</button>
        )}

        <button
          disabled={totalPages === 1}
          onClick={() => this.handleClick(totalPages)}>
          Last
        </button>
      </Flex>
    );
  }
}
