import { NavigationActions } from 'react-navigation';
import Navigator from '../../routes';

const INITIAL_STATE = Navigator.router.getStateForAction(
  NavigationActions.init()
);

export default (state = INITIAL_STATE, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};
