import React from 'react';

import RandomItem from '../RandomItem';
import ItemSelector from '../ItemSelector';
// import ItemDetails from '../ItemDetails';

import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.pageContents}>
      <h1 className="visually-hidden">Rick and Morty</h1>
      <RandomItem />
      <ItemSelector />
      {/*
      <section className="details">
        <h2 className="visually-hidden">Item Details</h2>
        <div className="container details__container">
          <p className="details__alive-status details__alive-status--alive">alive</p>
          <img className="details__img" src="img/detail-img.jpg" alt="Morty" width="141" height='141' />
          <p className="details__name">Morty Smith</p>
          <ul className="details__list">
            <li className="details__item">
              <p className="details__label">species</p>
              <p className="details__delimiter"></p>
              <p className="details__value">Human</p>
            </li>
            <li className="details__item">
              <p className="details__label">gender</p>
              <p className="details__delimiter"></p>
              <p className="details__value">Male</p>
            </li>
            <li className="details__item">
              <p className="details__label">location</p>
              <p className="details__delimiter"></p>
              <p className="details__value">Earth (Replacement Dimension)</p>
            </li>
            <li className="details__item">
              <p className="details__label">created</p>
              <p className="details__delimiter"></p>
              <p className="details__value">04 November 2017 </p>
            </li>
          </ul>
        </div>
      </section> */}
    </main>
  );
};

export default Main;
