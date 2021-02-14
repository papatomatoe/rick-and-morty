import React from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.css';

const Pagination = ({ info = {}, getButtonDirection }) => {
  const {
    prev = '',
    next = ''
  } = info;

  return (
    <ul className={styles.pagination}>
      <li className={`${styles.pagination__item} ${prev === null ? styles.pagination__itemBlocked : ''}`}>
        <button
          className={styles.pagination__btn}
          type="button"
          onClick={() => getButtonDirection('prev')}
          disabled={!prev}
        >Previous</button>
      </li>
      <li className={`${styles.pagination__item} ${next === null ? styles.pagination__itemBlocked : ''}`}>
        <button
          className={styles.pagination__btn}
          type="button"
          onClick={() => getButtonDirection('next')}
          disabled={!next}
        >Next</button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  info: PropTypes.object.isRequired,
  getButtonDirection: PropTypes.func.isRequired
}

export default Pagination
