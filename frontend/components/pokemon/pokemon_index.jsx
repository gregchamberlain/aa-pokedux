import React, { Component } from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default ({ pokemon, children, loading }) => (
  <section className="pokedex">
    <ul>
      {pokemon.map(pokeman => <PokemonIndexItem key={pokeman.id} pokeman={pokeman} />)}
    </ul>
    {children}
  </section>
);
