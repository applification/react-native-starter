import { CHANGE_CONNECTION_STATUS } from '../actions/types';

export const INITIAL_STATE = {
  isConnected: 'unknown'
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_CONNECTION_STATUS:
      //console.log(`connection_status_change: ${action.isConnected}`);
      return {
        ...state,
        isConnected: action.isConnected
      };
    default:
      return { ...state };
  }
}
