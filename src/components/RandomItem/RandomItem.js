import React from 'react';

import Service from '../../service';
import { withErrorBoundary } from '../hocs';
import { characterAdapter } from '../../adapters';
import Spinner from '../Spinner';
import styles from './RandomItem.module.css';

class RandomItem extends React.Component {
  DEFAULT_PAGE_NUMBER = 1
  INTERVAL_TIME = 10000
  API = new Service()

  state = {
    item: {},
    totalItems: 0,
    isLoading: true,
    timerId: ''
  }

  getRadomId = () => Math.floor(Math.random() * this.state.totalItems);

  componentDidMount() {
    this.API.getCharacterList(this.DEFAULT_PAGE_NUMBER)
      .then(data => this.setState({ totalItems: data.info.count, isLoading: true }))
      .then(() => this.API.getCharacter(this.getRadomId()))
      .then(data => this.setState({ item: characterAdapter(data) }))
      .then(() => this.setState({ isLoading: false }));
    const intervalId = setInterval(() => {
      this.API.getCharacter(this.getRadomId())
        .then(data => this.setState({ item: characterAdapter(data) }))
        .then(() => this.setState({ isLoading: false }));
    }, this.INTERVAL_TIME);
    this.setState({ timerId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { item, isLoading } = this.state;

    return (
      <section className={styles.random} >
        {
          isLoading ? <Spinner /> : (
            <React.Fragment>
              <div className={styles.random__imgContainer}>
                <img className={styles.random__img} src={item.image} alt={item.name} width="359" />
              </div>
              <h2 className={styles.random__title}>{item.name}</h2>
            </React.Fragment>
          )
        }
      </section>
    )
  }
}

export default withErrorBoundary(RandomItem);
