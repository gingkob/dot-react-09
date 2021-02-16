import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  wrapper:{
    borderBottom:"1px solid black",
    padding: [15, 10],
    textAlign:'right'
  }
})

const Navigation = () => {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      Welcome, Kwame
    </div>
  )
}

export default Navigation
