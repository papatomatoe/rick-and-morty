import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '../Pagination';
import Spinner from '../Spinner';

const withDataSelector = (Component, getData) => {
  return class extends React.Component {
    state = {
      items: [],
      pageNumber: 1,
      info: {},
      isLoading: true,
    }

    componentDidMount() {
      getData(this.state.pageNumber)
        .then(data => this.setState({ items: data.results, info: data.info }))
        .then(() => this.setState({ isLoading: false }));
    }

    componentDidUpdate(_, prevState) {
      if (prevState.pageNumber !== this.state.pageNumber && prevState.isLoading !== this.state.isLoading) {
        getData(this.state.pageNumber)
          .then(data => this.setState({ items: data.results, info: data.info, isLoading: false }))
      }
    }

    getPageNumberHandler = (direction) => {
      this.setState({ isLoading: true });
      if (direction === 'prev') {
        this.setState(prev => ({ pageNumber: prev.pageNumber === 1 ? 1 : prev.pageNumber - 1 }));
        return;
      }
      this.setState(prev => ({ pageNumber: prev.pageNumber === 34 ? 34 : prev.pageNumber + 1 }));
    }

    render() {
      const { items, info, isLoading } = this.state;

      if (isLoading) {
        return <Spinner />
      }

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

