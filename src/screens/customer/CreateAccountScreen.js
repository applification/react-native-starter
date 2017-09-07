import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  View,
  StyleProvider
} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

class CreateAccountScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Post a Job',
    headerTintColor: '#00aaf9',
    headerBackTitle: 'Back'
  });

  setJobDetails = () => {
    this.props.navigation.navigate('jobDetail');
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
            <Text style={{ paddingBottom: 20 }}>
              Account Creation Stripe Stuff
            </Text>
            <Button block info onPress={this.setJobDetails}>
              <Text>Create Account</Text>
            </Button>
            <View style={{ height: 20 }} />

          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default CreateAccountScreen;
