import connectionReducer, {
  initialState
} from '../../src/reducers/connection_reducer';
import * as actions from '../../src/actions/types';

it('should return an initial state', () => {
  expect(connectionReducer(initialState, { type: '_NULL' })).toMatchSnapshot();
});

it('handles action of type "CHANGE_CONNECTION_STATUS" offline', () => {
  const action = { type: actions.CHANGE_CONNECTION_STATUS, isConnected: false };
  expect(connectionReducer(initialState, action)).toMatchSnapshot();
});

it('handles action of type "CHANGE_CONNECTION_STATUS" online', () => {
  const action = { type: actions.CHANGE_CONNECTION_STATUS, isConnected: true };
  expect(connectionReducer(initialState, action)).toMatchSnapshot();
});
