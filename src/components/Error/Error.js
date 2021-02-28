import React from 'react'

import Styles from './Error.module.css'

const Error = () => {
  return (
    <div className={Styles.error}>
      <img src="img/error.svg" alt="something has gone wrong..." width="500" />
    </div>
  )
};

export default Error;
