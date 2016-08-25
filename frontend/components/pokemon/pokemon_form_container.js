import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import * as ACTIONS from '../../actions/pokemon_actions';

const mapDispatchToProps = dispatch => ({
  createPokeman: (pokeman) => dispatch(ACTIONS.createPokeman(pokeman))
});

const mapStateToProps = state => ({
  types: state.types,
  errors: state.pokemon.error
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);
