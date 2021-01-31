import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainMenuItem.module.css';

const MainMenuItem = ({ href, title }) => {
  return (
    <li className={styles.mainMenu__item}>
      <a className={styles.mainMenu__link} href={href}>
        {title}
      </a>
    </li>
  );
};

MainMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MainMenuItem;
