import {combineReducers} from 'redux';
import user from './user';
import wishes from './wishes';

export default combineReducers({
  user,
  wishes
})
