import React from 'react'

import Styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={Styles.spinner}>
      <div className={Styles.spinner__inner}></div>
    </div>
  );
}

export default Spinner;
