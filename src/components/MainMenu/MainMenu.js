import React from 'react';

import MainMenuItem from '../MainMenuItem';

import styles from './MainMenu.module.css';


const linkStack = [
  { title: 'Character', href: '/character/' },
  { title: 'Location', href: '/location/' },
  { title: 'Episode', href: '/episode/' },
  { title: 'About', href: '/about/' },
]

const MainMenu = () => {

  return (
    <ul className={styles.mainMenu}>
      {
        linkStack.map((link, idx) => <MainMenuItem key={`${idx}-${link.title}`} title={link.title} href={link.href} />)
      }
    </ul>
  );
};

export default MainMenu;
