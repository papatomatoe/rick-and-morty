import React from 'react';

import Navigation from '../Navigation';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.pageHeader}>
      <div className="container">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
