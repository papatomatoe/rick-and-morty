import React from 'react'

import Styles from './Error404.module.css';

const Error404 = () => {
  return (
    <div className={`container ${Styles.notFound}`}>
      <img className={Styles.notFoundImg} src="img/cucumber.svg" alt="Rick Cucumber" width="240" />
      <img className={Styles.notFoundTxt} src="img/404.png" alt="404 page not found" width="377" />
      <a className={Styles.notFoundLink} href="/">go back</a>
    </div>
  )
};

export default Error404;
