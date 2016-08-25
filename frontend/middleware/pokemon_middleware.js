import * as ACTIONS from '../actions/pokemon_actions';
import * as API from '../util/api_util';

const PokemonMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case ACTIONS.FETCH_ALL_POKEMON:
      const success = (pokemon) => dispatch(ACTIONS.receiveAllPokemon(pokemon));
      API.fetchAllPokemon(success);
      next(action);
      break;
    default:
      next(action);
  }
};

export default PokemonMiddleware;
