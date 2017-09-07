import { combineReducers } from 'redux';

import connection from './connection_reducer';
import suppliers from './supplier_reducer';
import nav from './nav_reducer';

export default combineReducers({
  connection,
  suppliers,
  nav
});
