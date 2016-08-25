export const fetchAllPokemon = (success) => {
  $.ajax({
    method: 'get',
    url: '/api/pokemon',
    success,
  });
};
