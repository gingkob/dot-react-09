import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss'

import UserContext from '../User/User';
import { SaladContext } from '../SaladMaker/SaladMaker';

const useStyles = createUseStyles({
  add: {
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  favorite: {
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 10,
    cursor: 'pointer'
  },
  image: {
    fontSize: 80
  },
  wrapper: {
    border: '1px solid lightgray',
    margin: 20,
    padding: 25,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 200
  }
})

const reducer = key => key + 1;

const SaladItem = ({ image, name }) => {

  const classes = useStyles();
  const context = useContext(UserContext)
  const favorite = context.favorites.includes(name)

  const { setSalad } = useContext(SaladContext)
  const [id, updateId] = useReducer(reducer, 0);

  function update() {
    setSalad({
      name,
      id: `${name}-${id}`
    })
    updateId();
  };

  function favoritesHandler() {
    context.setFavorites(name)
  }

  return (
    <div className={classes.wrapper}>
      <h3>
        {name}
      </h3>
        <span className={classes.favorite} role="button" onClick={favoritesHandler} aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
          {favorite ? '😋' : '☠️'}
        </span>
      <button className={classes.add} onClick={update}>
        <span className={classes.image} role="img" aria-label={name}>{image}</span>
      </button>
    </div>
  )
}

SaladItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default SaladItem
