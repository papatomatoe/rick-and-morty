import React from 'react';
import PropTypes from 'prop-types';

import styles from './ItemDetails.module.css';

const ItemDetails = ({ name, img, status, children }) => {
  return (
    <section className={styles.details}>
      <h2 className="visually-hidden">Item Details</h2>
      <div className={`container ${styles.details__container}`}>
        <p className={`${styles.details__aliveStatus} ${styles.details__aliveStatus__alive}`}>{status}</p>
        <img className={styles.details__img} src={img} alt={name} width="141" height='141' />
        <p className={styles.details__name}>{name}</p>
        <ul className={styles.details__list}>
          {
            children
          }
        </ul>
      </div>
    </section >
  );
};

ItemDetails.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default ItemDetails;
