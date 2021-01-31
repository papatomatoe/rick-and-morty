import React from 'react';

import MainMenu from '../MainMenu';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.pageHeader__nav}>
      <a className={styles.pageHeader__link} href="#">
        <picture>
          <source media="(min-width:768px)" srcSet="img/logo.svg" />
          <img className={styles.pageHeader__logo} src="img/logo-mob.svg" alt="Rick and Morty Logo" width="118" heigh="78" />
        </picture>
      </a>

      <MainMenu />

      <button className={styles.pageHeader__btn} type="button" aria-label="Open Main Menu"></button>
    </nav>
  );
};

export default Navigation;
