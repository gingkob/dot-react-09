import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyle = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: 50,
    '& li': {
      width: 100
    }
  },
  wrapper: {
    borderTop: 'black solid 1px',
    display: 'flex',
    padding: 25,
  }
})

const SaladSummary = () => {

  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <h2>Your Salad</h2>
      <ul className={classes.list}>
        <li>Apple</li>
        <li>Avocado</li>
        <li>Carrots</li>
      </ul>
    </div>
  )
}

export default SaladSummary
