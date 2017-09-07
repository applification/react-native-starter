import React, { Component } from 'react';
import { View, Text } from 'react-native';

class RequestCameraPermissions extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 20 }}>
          Request Camera permissions
        </Text>
      </View>
    );
  }
}

export default RequestCameraPermissions;
