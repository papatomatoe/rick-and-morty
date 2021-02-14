import React from 'react';

import RandomItem from '../RandomItem';
import ItemSelector from '../ItemSelector';

import styles from './Main.module.css';

import Service from '../../service';

import { Character, Location } from '../rick-and-morty-components';

class Main extends React.Component {
  API = new Service();

  state = {
    characterId: 1,
  }

  getCharacter = (id) => this.setState({ characterId: id });

  render() {
    const { characterId } = this.state;

    return (
      <main className={styles.pageContents}>
        <h1 className="visually-hidden">Rick and Morty</h1>
        <RandomItem />
        <ItemSelector getId={this.getCharacter} />
        <Character id={characterId} />
        <Location id={4} />
      </main>
    );
  }
}

export default Main;
