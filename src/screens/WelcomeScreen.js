import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Text, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

class WelcomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Three Amigo Apps',
    headerTintColor: '#00aaf9',
    headerBackTitle: 'Back'
  });

  viewSuppliers = () => {
    this.props.navigation.navigate('supplier');
  };

  viewCustomers = () => {
    this.props.navigation.navigate('customer');
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
            <Button block info onPress={this.viewSuppliers}>
              <Text>Supplier</Text>
            </Button>
            <View style={{ height: 20 }} />
            <Button block info onPress={this.viewCustomers}>
              <Text>Customer</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default WelcomeScreen;
