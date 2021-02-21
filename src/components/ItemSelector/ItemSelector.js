import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

import styles from './ItemSelector.module.css';

const ItemSelector = ({ getId, items, children }) => {
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
          {
            children
          }
        </div>
      </div>
    </section>
  );
};

ItemSelector.propTypes = {
  getId: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  children: PropTypes.any
}

export default ItemSelector;
