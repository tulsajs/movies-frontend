import React, { Component } from 'react';
import { range } from 'lodash';
import uuid from 'uuid';

export default class Pagination extends Component {
  nextPage () {
    const { current_page, total_pages } = this.props.pagination;

    if (current_page < total_pages) {
      this.props.actions.nextPage();
    }
  }

  previousPage () {
    const { current_page } = this.props.pagination;

    if (current_page > 1) {
      this.props.actions.previousPage();
    }
  }

  renderPagination () {
    const { current_page, total_pages } = this.props.pagination;
    const pages = range(total_pages);
    return pages.map(number => {
      number += 1;
      return (
        <button className={current_page === number ? 'picked' : null} key={uuid.v1()} onClick={() => this.props.actions.goToPage(number)}>{number}</button>
      );
    });
  }

  render () {
    const { total_pages } = this.props.pagination;
    return (
      <div>
      { total_pages > 1
           ? <pagination>
               <button onClick={::this.previousPage}>Previous</button>
               {this.renderPagination()}
               <button onClick={::this.nextPage}>Next</button>
             </pagination>
           : null }
      </div>
    );
  }
}

Pagination.propTypes = {
  pagination: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

