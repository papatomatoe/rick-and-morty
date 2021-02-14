import React from 'react';
import PropTypes from 'prop-types';

import styles from './ItemDetails.module.css';

const ItemDetails = ({ name, img = '', status = '', children }) => {

  const getStatusStyle = (status) => {
    if (!status || status === 'unknown') {
      return '';
    }

    if (status === 'Alive') {
      return styles.details__aliveStatus__alive;
    }

    if (status === 'Dead') {
      return styles.details__aliveStatus__dead;
    }
  };

  return (
    <section className={styles.details}>
      <h2 className="visually-hidden">Item Details</h2>
      <div className={`container ${styles.details__container}`}>
        {
          status ? <p className={`${styles.details__aliveStatus} ${getStatusStyle(status)}`}>{status}</p> : ''
        }
        {img ? <img className={styles.details__img} src={img} alt={name} width="141" height='141' /> : ''}
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
  img: PropTypes.string,
  status: PropTypes.string
}

export default ItemDetails;
