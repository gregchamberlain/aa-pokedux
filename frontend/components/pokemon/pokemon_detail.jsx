import  { withRouter } from 'react-router';
import React from 'react';

const PokemonDetail = ({ pokeman, router, children, loading }) => (
  <section className="pokemon-detail">
  {loading ? <div className="loading-overlay pokeball-loader">
    <div className="pokeball"></div>
  </div> :
  <ul>
    <img src={pokeman.image_url} alt={pokeman.name}/>
      <li><h2>{pokeman.name}</h2></li>
      <li>Type: {pokeman.poke_type}</li>
      <li>Attack: {pokeman.attack}</li>
      <li>Defense: {pokeman.defense}</li>
      <li>Moves: &#34;{pokeman.moves && pokeman.moves.join(", ")}&#34;</li>
    <section className="toys">
        <h3>Toys</h3>
      <ul className="toy-list">
        {pokeman.toys && pokeman.toys.map((toy, index) => (
          <li key={toy.name}
              onClick={() => router.push(`/pokemon/${pokeman.id}/toys/${index}`)}>
            {toy.name}
          </li>
        ))}
      </ul>
      {children}
    </section>
  </ul>}
</section>
);


export default withRouter(PokemonDetail);
