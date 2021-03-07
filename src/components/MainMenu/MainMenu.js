import React from 'react';
import PropTypes from 'prop-types';

import MainMenuItem from '../MainMenuItem';

import styles from './MainMenu.module.css';

const linkStack = [
  { title: 'Character', href: '/character' },
  { title: 'Location', href: '/location' },
  { title: 'Episode', href: '/episode' },
  { title: 'About', href: '/about' },
]

const MainMenu = ({ isOpen }) => {

  return (
    <ul className={`${styles.mainMenu} ${isOpen ? `${styles.mainMenu__opened}` : ''}`}>
      {
        linkStack.map((link, idx) => <MainMenuItem key={`${idx}-${link.title}`} title={link.title} href={link.href} />)
      }
    </ul>
  );
};

MainMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default MainMenu;
