import React from 'react'
import { withRouter } from 'react-router-dom';

import Styles from './Error404.module.css';

const Error404 = ({ history }) => {
  return (
    <div className={`container ${Styles.notFound}`}>
      <a
        className={Styles.notFoundLink}
        href='/'
        onClick={evt => {
          evt.preventDefault();
          history.goBack();
        }}
      >go back</a>
      <img className={Styles.notFoundImg} src="img/cucumber.svg" alt="Rick Cucumber" width="240" />
      <img className={Styles.notFoundTxt} src="img/404.png" alt="404 page not found" width="377" />
    </div>
  )
};

export default withRouter(Error404);
