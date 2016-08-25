import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({pokeman, router}) => (
  <li className="pokemon-index-item" onClick={() => _handleClick(router, `/pokemon/${pokeman.id}`)}>
    <span>{pokeman.name}</span>
    <img src={pokeman.image_url} alt={pokeman.name} />
    <span>{pokeman.poke_type}</span>
  </li>
);

export default withRouter(PokemonIndexItem);


const _handleClick = (router, path) => {
  router.push(path);
};
