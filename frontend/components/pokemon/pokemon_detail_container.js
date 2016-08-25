import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, props) => ({
  pokeman: state.pokemon[props.params.id] || {},
  loading: state.loading
});

export default connect(mapStateToProps)(PokemonDetail);
