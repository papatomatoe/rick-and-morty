import React from 'react';

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

        <CharacterSelector getId={this.getCharacterId} />
        <Character id={characterId} />

        <LocationSelector getId={this.getLocationId} />
        <Location id={locationId} />

        <EpisodeSelector getId={this.getEpisodeId} />
        <Episode id={episodeId} />
      </main>
    );
  }
}

export default Main;
