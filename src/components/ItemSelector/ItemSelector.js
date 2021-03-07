import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

import styles from './ItemSelector.module.css';

class ItemSelector extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    const { isOpen } = this.state;
    const {
      getId,
      items,
      activeId,
      children
    } = this.props;

    return (
      <section className={styles.selector} >
        <h2 className="visually-hidden">Item selector</h2>
        <div className={`container ${styles.selector__container}`}>
          <button
            type="button"
            className={styles.selector__opener}
            onClick={() => this.setState(prev => ({ isOpen: !prev.isOpen }))}
          >
            {
              `${isOpen ? 'Close' : 'Open'} Element Selector`
            }
          </button>
          <div className={`${styles.selector__wrapper} ${isOpen ? `${styles.selector__wrapper__opened}` : ''}`}>
            <ul className={styles.selector__list}>
              {
                items.length ?
                  items.map(({ id, name }) => (
                    <Item
                      key={id}
                      id={id}
                      name={name}
                      getId={getId}
                      isActive={activeId === id}
                    />
                  ))
                  : ''
              }
            </ul>
            {
              children
            }
          </div>
        </div>
      </section >
    );
  }
}

ItemSelector.propTypes = {
  getId: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  activeId: PropTypes.number.isRequired,
  children: PropTypes.any
}

export default ItemSelector;
