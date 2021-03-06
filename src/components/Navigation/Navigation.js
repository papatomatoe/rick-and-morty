import React from 'react';
import { Link } from 'react-router-dom';

import MainMenu from '../MainMenu';

import styles from './Navigation.module.css';

class Navigation extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <nav className={styles.pageHeader__nav}>
        <Link className={styles.pageHeader__link} to="/">
          <picture>
            <source media="(min-width:768px)" srcSet="img/logo.svg" />
            <img className={styles.pageHeader__logo} src="img/logo-mob.svg" alt="Rick and Morty Logo" width="118" heigh="78" />
          </picture>
        </Link>

        <MainMenu isOpen={this.state.isOpen} />

        <button
          onClick={() => this.setState(prev => ({ isOpen: !prev.isOpen }))}
          className={styles.pageHeader__btn}
          type="button"
          aria-label="Open Main Menu"></button>
      </nav>
    );
  }
}

export default Navigation;
