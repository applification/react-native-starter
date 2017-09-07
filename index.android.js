import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';

import config from './config';
import store from './src/store';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SupplierWelcome from './src/screens/supplier/SupplierWelcomeScreen';
import SupplierRegisterScreen
  from './src/screens/supplier/SupplierRegisterScreen';
import SupplierLoginScreen from './src/screens/supplier/SupplierLoginScreen';
import SupplierScreen from './src/screens/SupplierScreen';
import SupplierDetailsScreen from './src/screens/SupplierDetailsScreen';

import CustomerWelcomeScreen
  from './src/screens/customer/CustomerWelcomeScreen';

const tracker = new GoogleAnalyticsTracker(config.GA_TRACKER_ID);

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

export default class rnAppStarter extends Component {
  render() {
    const MainNavigator = TabNavigator(
      {
        welcome: {
          screen: StackNavigator({
            mainWelcome: { screen: WelcomeScreen }
          })
        },
        supplier: {
          screen: StackNavigator({
            supplierWelcome: { screen: SupplierWelcome },
            supplierRegister: { screen: SupplierRegisterScreen },
            supplierLogin: { screen: SupplierLoginScreen }
          })
        },
        customer: {
          screen: StackNavigator({
            customerWelcome: { screen: CustomerWelcomeScreen },
            suppliers: { screen: SupplierScreen },
            supplierDetails: { screen: SupplierDetailsScreen }
          })
        }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        lazy: true
      }
    );

    return (
      <Provider store={store}>
        <MainNavigator
          onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getCurrentRouteName(currentState);
            const prevScreen = getCurrentRouteName(prevState);

            if (prevScreen !== currentScreen) {
              tracker.trackScreenView(currentScreen);
            }
          }}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rnAppStarter', () => rnAppStarter);
