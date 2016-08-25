import * as ACTIONS from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_ALL_POKEMON:
      let pokemon = {};

      action.pokemon.forEach((pokeman) => {
        pokemon[pokeman.id] = pokeman;
      });

      return Object.assign({}, state, pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
