import React from 'react'
import { createUseStyles } from 'react-jss';
import SaladBuilder from '../SaladBuilder/SaladBuilder';

const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center'
  }
})

function SaladMaker() {

  const classes = useStyles();

  return (
    <>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">🥗 </span>
          Build Your Custom Salad!
        <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladBuilder />
    </>
  )
}

export default SaladMaker
