import React from 'react';

import Item from '../Item';
import Pagination from '../Pagination';

import styles from './ItemSelector.module.css';

const items = [
  { id: 1, title: 'Rick Sanchez' },
  { id: 2, title: 'Morty Smith' },
  { id: 3, title: 'Summer Smith' },
  { id: 4, title: 'Beth Smith' },
  { id: 5, title: 'Jerry Smith' },
  { id: 6, title: 'Abadango Cluster Princess' },
  { id: 7, title: 'Abradolf Lincler' },
]

const ItemSelector = () => {
  return (
    <section className={styles.selector}>
      <h2 className="visually-hidden">Item selector</h2>
      <div className={`container ${styles.selector__container}`}>
        <button type="button" className={styles.selector__opener}>Open Character List</button>
        <div className={styles.selector__wrapper}>
          <ul className={styles.selector__list}>
            {
              items.map(({ id, title }) => <Item key={id} title={title} />)
            }
          </ul>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default ItemSelector;
