import React from 'react';
import PropTypes from 'prop-types';

import styles from './Record.module.css';

const Record = ({ label, item }) => {
  return (
    <li className={styles.details__item}>
      <p className={styles.details__label}>{label}</p>
      <p className={styles.details__delimiter}></p>
      <p className={styles.details__value}>{item[label]}</p>
    </li>
  );
};

Record.propTypes = {
  label: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
}

export default Record;
