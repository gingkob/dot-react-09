import React, { useReducer } from 'react';
import Navigation from '../Navigation/Navigation'
import SaladMaker from '../SaladMaker/SaladMaker';
import UserContext from '../User/User';
import './App.css';

const user = {
  name: 'Kwameee',
  favorites: [
    'avocado',
    'carrot'
  ]
}

function reducer(state, item) {
  let itemIndex = state.indexOf(item)
  if (itemIndex < 0) {
    return [...state, item]
  }
  let newArr = [...state];
  newArr.splice(itemIndex, 1)
  return newArr
}

function App() {

  const [favoritess, setFavorites] = useReducer(reducer, user.favorites)

  return (
    <UserContext.Provider value={{ name: user.name, favorites: favoritess, setFavorites}}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;
