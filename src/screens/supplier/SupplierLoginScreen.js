import React, { Component } from 'react';
import { Container, Content, StyleProvider } from 'native-base';

import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

class SupplierLoginScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Supplier Login',
    headerTintColor: '#00aaf9',
    headerBackTitle: 'Back'
  });

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content />
        </Container>
      </StyleProvider>
    );
  }
}

export default SupplierLoginScreen;
