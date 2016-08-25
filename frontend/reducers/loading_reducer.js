import * as ACTIONS from '../actions/pokemon_actions';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case ACTIONS.START_LOADING:
      console.log("Start loading");
      return true;
    case ACTIONS.STOP_LOADING:
      console.log("Stop loading");
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
