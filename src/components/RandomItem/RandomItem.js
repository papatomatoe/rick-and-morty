import React from 'react';

import styles from './RandomItem.module.css';

const RandomItem = () => {
  return (
    <section className={styles.random}>
      <img className={styles.random__img} src="img/rand-img.jpg" alt="Rick Sanchez" width="359" />
      <h2 className={styles.random__title}>Rick Sanchez</h2>
    </section>
  );
};

export default RandomItem;
