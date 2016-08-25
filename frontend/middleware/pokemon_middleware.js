import * as ACTIONS from '../actions/pokemon_actions';
import * as API from '../util/api_util';
import {hashHistory} from 'react-router';

const PokemonMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case ACTIONS.FETCH_ALL_POKEMON:
      dispatch(ACTIONS.startLoading());
      const success = (pokemon) => {
        dispatch(ACTIONS.receiveAllPokemon(pokemon));
        dispatch(ACTIONS.stopLoading());
      };
      API.fetchAllPokemon(success);
      next(action);
      break;
    case ACTIONS.FETCH_POKEMAN:
      dispatch(ACTIONS.startLoading());
      const success2 = pokeman => {
        dispatch(ACTIONS.receivePokeman(pokeman));
        dispatch(ACTIONS.stopLoading());
      };
      API.fetchPokeman(success2, action.id);
      next(action);
      break;
    case ACTIONS.CREATE_POKEMAN:
      dispatch(ACTIONS.startLoading());
      const success3 = pokeman => {
        dispatch(ACTIONS.receivePokeman(pokeman));
        dispatch(ACTIONS.stopLoading());
        hashHistory.push(`/pokemon/${pokeman.id}`);
      };
      const error = err => dispatch(ACTIONS.pokemonError(err));
      API.createPokeman(success3, error, action.pokeman);
      next(action);
      break;
    default:
      next(action);
  }
};

export default PokemonMiddleware;
