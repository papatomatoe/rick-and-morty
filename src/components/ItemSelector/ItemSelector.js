import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';
import Pagination from '../Pagination';

import Service from '../../service';

import styles from './ItemSelector.module.css';

class ItemSelector extends React.Component {

  API = new Service();

  state = {
    items: [],
    pageNumber: 1,
    info: {}
  }

  componentDidMount() {
    this.API.getCharacterList(this.state.pageNumber).then(data => this.setState({ items: data.results, info: data.info }));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.pageNumber !== this.state.pageNumber) {
      this.API.getCharacterList(this.state.pageNumber).then(data => this.setState({ items: data.results, info: data.info }));
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
    const { getId } = this.props;
    const { items, info } = this.state;

    return (
      <section className={styles.selector} >
        <h2 className="visually-hidden">Item selector</h2>
        <div className={`container ${styles.selector__container}`}>
          <button type="button" className={styles.selector__opener}>Open Character List</button>
          <div className={styles.selector__wrapper}>
            <ul className={styles.selector__list}>
              {
                items.length ? items.map(({ id, name }) => <Item key={id} id={id} name={name} getId={getId} />) : ''
              }
            </ul>
            <Pagination info={info} getButtonDirection={this.getPageNumberHandler} />
          </div>
        </div>
      </section>
    );
  }
};

ItemSelector.propTypes = {
  getId: PropTypes.func.isRequired
}

export default ItemSelector;
