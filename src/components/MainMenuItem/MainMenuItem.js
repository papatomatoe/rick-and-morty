import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import styles from './MainMenuItem.module.css';

const activeStyle = {
  textDecoration: 'underline'
};

const MainMenuItem = ({ href, title }) => {
  return (
    <li className={styles.mainMenu__item}>
      <NavLink className={styles.mainMenu__link} to={href} activeStyle={activeStyle}>
        {title}
      </NavLink>
    </li>
  );
};

MainMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MainMenuItem;
