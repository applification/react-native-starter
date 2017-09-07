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

class PostJobScreen extends Component {
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
              1. Postcode lookup allowing user to select their house number
            </Text>
            <Text style={{ paddingBottom: 20 }}>
              2. "There are 14 Grass Cutters in your area.."
            </Text>
            <Button block info onPress={this.setJobDetails}>
              <Text>Tell us what you need doing</Text>
            </Button>
            <View style={{ height: 20 }} />

          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

export default PostJobScreen;
