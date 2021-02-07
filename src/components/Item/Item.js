import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.css';

const Item = ({ name }) => {
  return (
    <li className={styles.selector__item}>
      <button className={styles.selector__btn} type="button">{name}</button>
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired
};

export default Item;


