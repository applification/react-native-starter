import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SetLawnSize extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 20 }}>
          Set Your Lawn Condition
        </Text>
      </View>
    );
  }
}

export default SetLawnSize;
