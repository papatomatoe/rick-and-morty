import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.css';

const Item = ({ title }) => {
  return (
    <li className={styles.selector__item}>
      <button className={styles.selector__btn} type="button">{title}</button>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired
};

export default Item;


