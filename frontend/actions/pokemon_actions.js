export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const FETCH_ALL_POKEMON = 'FETCH_ALL_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchAllPokemon = () => ({
  type: FETCH_ALL_POKEMON
});
