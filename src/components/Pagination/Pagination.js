import React from 'react';

import styles from './Pagination.module.css';

const Pagination = () => {
  return (
    <ul className={styles.pagination}>
      <li className={styles.pagination__item}>
        <button className={styles.pagination__btn} type="button">Previous</button>
      </li>
      <li className={styles.pagination__item}>
        <button className={styles.pagination__btn} type="button">Next</button>
      </li>
    </ul>
  );
};

export default Pagination
