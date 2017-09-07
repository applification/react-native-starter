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

class CustomerWelcomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Customer Welcome',
    headerTintColor: '#00aaf9',
    headerBackTitle: 'Back'
  });

  search = () => {
    this.props.navigation.navigate('suppliers');
  };

  postMyJob = () => {
    this.props.navigation.navigate('postJob');
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
            <Button block info onPress={this.postMyJob}>
              <Text>Post a Job</Text>
            </Button>
            <View style={{ height: 20 }} />

          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default CustomerWelcomeScreen;
