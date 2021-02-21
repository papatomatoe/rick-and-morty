import React from 'react';
import PropTypes from 'prop-types';

import { characterAdapter, locationAdapter, episodeAdapter } from '../../adapters';


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
      switch (dataType) {
        case 'character':
          return characterAdapter(data);

        case 'location':
          return locationAdapter(data);

        case 'episode':
          return episodeAdapter(data);

        default:
          return data;
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
