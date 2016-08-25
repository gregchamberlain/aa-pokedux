import React, { Component } from 'react';


export default ({ pokemon }) => (
  <ul>
    {pokemon.map(pokeman => <li key={pokeman.id}>{pokeman.name}</li>)}
  </ul>
)
