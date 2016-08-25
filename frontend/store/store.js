import { createStore } from 'redux';
import rootReducer from '../reducers';
import rootMiddleware from '../middleware';
export default createStore(rootReducer, rootMiddleware);
