import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';

import store from './src/store';
import Navigator from './routes';

const App = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigation = connect(mapStateToProps)(App);

export default class rnAppStarter extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rnAppStarter', () => rnAppStarter);
