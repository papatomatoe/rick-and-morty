import React from 'react';
import { Route } from 'react-router-dom';

import RandomItem from '../RandomItem';

import styles from './Main.module.css';

import Service from '../../service';

import {
  Character,
  Location,
  Episode,
  CharacterSelector,
  LocationSelector,
  EpisodeSelector
} from '../rick-and-morty-components';

class Main extends React.Component {
  API = new Service();

  state = {
    characterId: 1,
    locationId: 1,
    episodeId: 1
  }

  getCharacterId = (id) => this.setState({ characterId: id });
  getLocationId = (id) => this.setState({ locationId: id });
  getEpisodeId = (id) => this.setState({ episodeId: id });

  render() {
    const { characterId, locationId, episodeId } = this.state;
    return (
      <main className={styles.pageContents}>
        <h1 className="visually-hidden">Rick and Morty</h1>
        <RandomItem />

        <Route path="/" exact>
          <h2 style={{ color: 'red' }}>Main Page</h2>
        </Route>

        <Route path='/character'>
          <CharacterSelector getId={this.getCharacterId} />
          <Character id={characterId} />
        </Route>

        <Route path='/location'>
          <LocationSelector getId={this.getLocationId} />
          <Location id={locationId} />
        </Route>

        <Route path='/episode'>
          <EpisodeSelector getId={this.getEpisodeId} />
          <Episode id={episodeId} />
        </Route>

        <Route path="/about">
          <h2 style={{ color: 'red' }}>About Page</h2>
        </Route>
      </main>
    );
  }
}

export default Main;
