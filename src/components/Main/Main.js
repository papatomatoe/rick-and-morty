import React from 'react';

import RandomItem from '../RandomItem';
import ItemSelector from '../ItemSelector';
import ItemDetails from '../ItemDetails';
import Record from '../Record';

import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.pageContents}>
      <h1 className="visually-hidden">Rick and Morty</h1>
      <RandomItem />
      <ItemSelector />
      <ItemDetails name={'Morty Smith'} status={'alive'} img={'./img/detail-img.jpg'}>
        <Record label={'species'} value={'Human'} />
        <Record label={'gender'} value={'Male'} />
        <Record label={'location'} value={'Earth (Replacement Dimension)'} />
        <Record label={'created'} value={'04 November 2017'} />
      </ItemDetails>
    </main>
  );
};

export default Main;
