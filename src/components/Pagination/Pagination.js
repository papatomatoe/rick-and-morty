import React from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.css';

const Pagination = ({ getButtonDirection }) => {
  return (
    <ul className={styles.pagination}>
      <li className={styles.pagination__item}>
        <button
          className={styles.pagination__btn}
          type="button"
          onClick={() => {
            getButtonDirection('prev')
          }}>Previous</button>
      </li>
      <li className={styles.pagination__item}>
        <button className={styles.pagination__btn} type="button" onClick={() => getButtonDirection('next')}>Next</button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  getButtonDirection: PropTypes.func.isRequired
}

export default Pagination
