import PokemonIndex from './pokemon_index';
import { connect } from 'react-redux';
import { objectToArray } from '../../util/selector';

const mapStateToProps = state => ({
  pokemon: objectToArray(state.pokemon)
});


export default connect(mapStateToProps)(PokemonIndex);
