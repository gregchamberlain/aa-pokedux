import PokemonMiddleware from './pokemon_middleware';
import { applyMiddleware } from 'redux';

export default applyMiddleware(PokemonMiddleware);
