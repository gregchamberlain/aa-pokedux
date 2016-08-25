import React from 'react';
import { render } from 'react-dom';
import * as API from './util/api_util';
import * as ACTIONS from './actions/pokemon_actions';
import Store from './store/store';
import Root from './components/root';

API.fetchAllPokemon((pokemon) => Store.dispatch(ACTIONS.receiveAllPokemon(pokemon)));
window.store = Store;


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  render(<Root store={Store}/>, root);
});
