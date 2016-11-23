import React, { Component } from 'react';
import { range, take, takeRight } from 'lodash';
import uuid from 'uuid';

export default class Pagination extends Component {
  selectPage (page) {
    this.props.actions.goToPage(page);
  }

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
    let pages = range(total_pages).map(page => page + 1);
    pages = [ current_page - 2, current_page - 1, current_page, current_page + 1, current_page + 2 ];
    return pages.map(number => {
      if (number <= 0 || number > total_pages) return;
      return (
        <button className={current_page === number ? 'isActive' : null} key={uuid.v1()} onClick={() => this.props.actions.goToPage(number)}>{number}</button>
      );
    });
  }

  render () {
    const { total_pages } = this.props.pagination;
    return (
      <div className='pagination'>
      { total_pages > 1
           ? <div className='pagination__container'>
               <button onClick={() => this.selectPage(1)}>First</button>
               {this.renderPagination()}
               <button onClick={() => this.selectPage(total_pages)}>Last</button>
             </div>
           : null }
      </div>
    );
  }
}

Pagination.propTypes = {
  pagination: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

