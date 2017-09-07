import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  StyleProvider,
  View
} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

class SupplierWelcomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Supplier Welcome',
    headerTintColor: '#00aaf9',
    headerBackTitle: 'Back'
  });

  register = () => {
    this.props.navigation.navigate('supplierRegister');
  };

  login = () => {
    this.props.navigation.navigate('supplierLogin');
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content
            contentContainerStyle={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <Button block info onPress={this.register}>
              <Text>Register</Text>
            </Button>
            <View style={{ height: 20 }} />
            <Button block info onPress={this.login}>
              <Text>Login</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default SupplierWelcomeScreen;
