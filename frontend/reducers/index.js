import pokemonReducer from './pokemon_reducer';
import loadingReducer from './loading_reducer';
import { combineReducers } from 'redux';

const types = ["bug", "dragon", "electric", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];

export default combineReducers({
  pokemon: pokemonReducer,
  types: (state = types, action) => {return state;},
  loading: loadingReducer
});
