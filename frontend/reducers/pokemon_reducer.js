import * as ACTIONS from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_ALL_POKEMON:
      let pokemon = {};
      action.pokemon.forEach((pokeman) => {
        pokemon[pokeman.id] = pokeman;
      });
      return Object.assign({}, state, pokemon);
    case ACTIONS.RECEIVE_POKEMAN:
      return Object.assign({}, state, {[action.pokeman.id]: action.pokeman});
    case ACTIONS.POKEMON_ERROR:
      return Object.assign({}, state, {error: action.error.responseJSON});
    default:
      return state;
  }
};

export default pokemonReducer;
