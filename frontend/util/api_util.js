export const fetchAllPokemon = (success) => {
  $.ajax({
    method: 'get',
    url: '/api/pokemon',
    success,
  });
};

export const fetchPokeman = (success, id) => {
  $.ajax({
    method: 'get',
    url: `/api/pokemon/${id}`,
    success
  });
};

export const createPokeman = (success, error, pokeman) => {
  $.ajax({
    method: 'post',
    url: '/api/pokemon',
    data: {pokemon: pokeman},
    success,
    error
  });
};
