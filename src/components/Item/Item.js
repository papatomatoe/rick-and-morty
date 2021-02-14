import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.css';

const Item = ({ id, name, getId }) => {
  return (
    <li className={styles.selector__item}>
      <button
        className={styles.selector__btn}
        type="button"
        onClick={() => getId(id)}
      >{name}</button>
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  name: PropTypes.string.isRequired,
  getId: PropTypes.func.isRequired
};

export default Item;


