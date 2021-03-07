import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import RandomItem from '../RandomItem';
import Error404 from '../Error404';

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

        <Switch>
          <Route path='/' exact>
            <Redirect to='/character' />
          </Route>

          <Route path='/character' exact>
            <CharacterSelector getId={this.getCharacterId} activeId={characterId} />
            <Character id={characterId} />
          </Route>

          <Route path='/location' exact>
            <LocationSelector getId={this.getLocationId} activeId={locationId} />
            <Location id={locationId} />
          </Route>
2
          <Route path='/episode' exact>
            <EpisodeSelector getId={this.getEpisodeId} activeId={episodeId} />
            <Episode id={episodeId} />
          </Route>

          <Route path='/about' exact>
            <h2 style={{ color: 'red' }}>About Page</h2>
          </Route>

          <Route>
            <Error404 />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
