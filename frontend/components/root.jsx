import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import * as ACTIONS from '../actions/pokemon_actions';



export default ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'
             component={PokemonIndexContainer}
             onEnter={() => store.dispatch(ACTIONS.fetchAllPokemon())}/>
    </Router>
  </Provider>
);
