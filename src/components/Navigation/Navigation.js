import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from '../User/User';

const useStyles = createUseStyles({
  wrapper: {
    borderBottom: "1px solid black",
    padding: [15, 10],
    textAlign: 'right'
  }
})

const Navigation = () => {

  const context = useContext(UserContext)

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      Welcome, {context.name}
    </div>
  )
}

export default Navigation
