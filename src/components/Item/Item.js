import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.css';

const Item = ({ id, name, getId, isActive }) => {
  const activeStyle = isActive ? styles.selector__itemCurrent : '';
  return (
    <li className={`${styles.selector__item} ${activeStyle}`}>
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
  getId: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Item;


