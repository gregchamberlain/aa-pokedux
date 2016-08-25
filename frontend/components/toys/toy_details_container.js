import { connect } from 'react-redux';
import ToyDetail from './toy_detail';

const getToys = (state, ownProps) => {
  let pokeman = state.pokemon[ownProps.params.id];

  if(pokeman && pokeman.toys){
    return pokeman.toys[ownProps.params.toy_index];
  } else{
    return {};
  }
};

const mapStateToProps = (state, ownProps) => ({
  toy: getToys(state, ownProps)
});

export default connect(mapStateToProps)(ToyDetail);
