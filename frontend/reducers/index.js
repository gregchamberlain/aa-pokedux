import pokemonReducer from './pokemon_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  pokemon: pokemonReducer
});
