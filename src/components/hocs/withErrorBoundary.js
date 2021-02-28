
import React from 'react';
import PropTypes from 'prop-types';

import Error from '../Error';

const withErrorBoundary = (Component) => {
  return class extends React.Component {
    state = {
      isError: false
    }

    componentDidCatch() {
      this.setState({ isError: true });
    }

    render() {
      if (this.state.isError) {
        return <Error />
      }
      return <Component {...this.props} />
    }
  }
};

withErrorBoundary.propTypes = {
  Component: PropTypes.elementType.isRequired,
  props: PropTypes.object
}

export default withErrorBoundary;
