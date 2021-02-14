import React from 'react';
import PropTypes from 'prop-types';

import { characterAdapter, locationAdapter } from '../../adapters';


const withDataDetails = (Component, getData, dataType) => {
  return class extends React.Component {
    state = {
      item: {},
      isLoading: true,
    }

    componentDidMount() {
      getData(this.props.id).then(data => setTimeout(() => this.setState({ item: data, isLoading: false }), 500))
    }

    componentDidUpdate(prevProps) {
      if (prevProps.id !== this.props.id) {
        this.setState({ isLoading: true })
        getData(this.props.id).then(data => setTimeout(() => this.setState({ item: data, isLoading: false }), 500))
      }
    }

    getAdaptedData = (data) => {
      if (!Object.values(data).length) {
        return data;
      }

      if (dataType === 'character') {
        return characterAdapter(data);
      }

      if (dataType === 'location') {
        return locationAdapter(data);
      }
    }

    render() {
      const { item, isLoading } = this.state;

      if (isLoading) {
        return <p style={{ color: 'white' }}>Loading...</p>
      }

      return <Component {...this.props} item={this.getAdaptedData(item)} />
    }
  }
};

withDataDetails.propTypes = {
  Component: PropTypes.elementType.isRequired,
  getData: PropTypes.func.isRequired,
  dataType: PropTypes.string.isRequired,
  props: PropTypes.object
}

export default withDataDetails;
