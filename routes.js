import { TabNavigator, StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SupplierWelcome from './src/screens/supplier/SupplierWelcomeScreen';
import SupplierRegisterScreen
  from './src/screens/supplier/SupplierRegisterScreen';
import SupplierLoginScreen from './src/screens/supplier/SupplierLoginScreen';
import SupplierScreen from './src/screens/SupplierScreen';
import SupplierDetailsScreen from './src/screens/SupplierDetailsScreen';
import CustomerWelcomeScreen
  from './src/screens/customer/CustomerWelcomeScreen';
import PostJobScreen from './src/screens/customer/PostJobScreen';
import JobDetailScreen from './src/screens/customer/JobDetailScreen';
import CreateAccountScreen from './src/screens/customer/CreateAccountScreen';

const welcomeStack = StackNavigator({
  welcome: { screen: WelcomeScreen }
});

const supplierStack = StackNavigator({
  supplierWelcome: { screen: SupplierWelcome },
  supplierRegister: { screen: SupplierRegisterScreen },
  supplierLogin: { screen: SupplierLoginScreen }
});

const customerStack = StackNavigator({
  customerWelcome: { screen: CustomerWelcomeScreen },
  suppliers: { screen: SupplierScreen },
  supplierDetails: { screen: SupplierDetailsScreen },
  postJob: { screen: PostJobScreen },
  jobDetail: { screen: JobDetailScreen },
  createAccount: { screen: CreateAccountScreen }
});

const Navigator = TabNavigator(
  {
    welcome: {
      screen: welcomeStack
    },
    supplier: {
      screen: supplierStack
    },
    customer: {
      screen: customerStack
    }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    lazy: true
  }
);

export default Navigator;
