import React from 'react';
import PropTypes from 'prop-types';

import styles from './Record.module.css';

const Record = ({ label, value }) => {
  return (
    <li className={styles.details__item}>
      <p className={styles.details__label}>{label}</p>
      <p className={styles.details__delimiter}></p>
      <p className={styles.details__value}>{value}</p>
    </li>
  );
};

Record.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Record;
