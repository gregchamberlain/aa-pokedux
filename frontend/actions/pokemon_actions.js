export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const FETCH_ALL_POKEMON = 'FETCH_ALL_POKEMON';
export const FETCH_POKEMAN = 'FETCH_POKEMAN';
export const RECEIVE_POKEMAN = 'RECEIVE_POKEMAN';
export const CREATE_POKEMAN = 'CREATE_POKEMAN';
export const POKEMON_ERROR = 'POKEMON_ERROR';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const startLoading = () => ({
  type: START_LOADING
});

export const stopLoading = () => ({
  type: STOP_LOADING
});

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchAllPokemon = () => ({
  type: FETCH_ALL_POKEMON
});

export const receivePokeman = (pokeman) => ({
  type: RECEIVE_POKEMAN,
  pokeman
});

export const fetchPokeman = (id) => ({
  type: FETCH_POKEMAN,
  id
});

export const createPokeman = (pokeman) => ({
  type: CREATE_POKEMAN,
  pokeman
});

export const pokemonError = (error) => ({
  type: POKEMON_ERROR,
  error
});
