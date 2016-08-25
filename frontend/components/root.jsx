import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import * as ACTIONS from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ToyDetailContainer from './toys/toy_details_container';
import PokemonForm from './pokemon/pokemon_form_container';



export default ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'
             component={PokemonIndexContainer}
             onEnter={() => store.dispatch(ACTIONS.fetchAllPokemon())}>
        <IndexRoute component={PokemonForm} />
        <Route path='pokemon/:id'
               component={PokemonDetailContainer}
               onEnter={(state) => store.dispatch(ACTIONS.fetchPokeman(state.params.id))}>
          <Route path='toys/:toy_index' component={ToyDetailContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
);
