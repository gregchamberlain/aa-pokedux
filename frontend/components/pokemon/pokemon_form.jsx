import React, { Component } from 'react';

export default class PokemonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attack: 0,
      defense: 0,
      moves: [],
      image_url: "",
      poke_type: "bug",
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokeman(this.state);
  }

  update(key) {
    return (e) => {
      if (key === "moves") {
        let moves = e.target.value.split(",").map(move => move.trim());
        this.setState({[key]: moves});
      } else {
        this.setState({[key]: e.target.value});
      }
    };
  }

  render() {
    const { types, errors } = this.props;


    return (
      <section className="pokemon-detail">
       <img src="http://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png"/>
       <ul>
         {errors && errors.map((err, index) => <li key={`${err}-${index}`}>{err}</li>)}
       </ul>
       <form className="pokemon-form" onSubmit={this.handleSubmit}>
         <label>Name: <input type="text" onChange={this.update("name")} value={this.state.name} /></label>
         <label>Attack: <input type="number" onChange={this.update("attack")} value={this.state.attack} /></label>
         <label>Defense:<input type="number" onChange={this.update("defense")} value={this.state.defense} /></label>
         <label>Moves: <input type="text" onChange={this.update("moves")} value={this.state.moves.join(",")} /></label>
         <label>Image: <input type="text" onChange={this.update("image_url")} value={this.state.image_url} /></label>
         <label>Pokemon Type:
           <select onChange={this.update("poke_type")} value={this.state.poke_type}>
             {types.map(type => <option key={type} value={type}>{type}</option>)}
           </select>
         </label>
         <button>Create Pokemon</button>
       </form>
     </section>
    );
  }
}
