import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '../Pagination';

const withDataSelector = (Component, getData) => {
  return class extends React.Component {
    state = {
      items: [],
      pageNumber: 1,
      info: {}
    }

    componentDidMount() {
      getData(this.state.pageNumber).then(data => this.setState({ items: data.results, info: data.info }));
    }

    componentDidUpdate(_, prevState) {
      if (prevState.pageNumber !== this.state.pageNumber) {
        getData(this.state.pageNumber).then(data => this.setState({ items: data.results, info: data.info }));
      }
    }

    getPageNumberHandler = (direction) => {
      if (direction === 'prev') {
        this.setState(prev => ({ pageNumber: prev.pageNumber === 1 ? 1 : prev.pageNumber - 1 }));
        return;
      }
      this.setState(prev => ({ pageNumber: prev.pageNumber === 34 ? 34 : prev.pageNumber + 1 }));
    }

    render() {
      const { items, info } = this.state;
      return (
        <Component {...this.props} items={items}>
          <Pagination info={info} getButtonDirection={this.getPageNumberHandler} />
        </Component>
      )

    }
  }
}

withDataSelector.propTypes = {
  Component: PropTypes.elementType.isRequired,
  getData: PropTypes.func.isRequired,
  props: PropTypes.object
}

export default withDataSelector;

