import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class JobConfirmations extends Component {
  createAccount = () => {
    // TODO: needs to be done from redux
    this.props.navigation.navigate('createAccount');
  };

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 20 }}>
          - Show Price £ {'\n'}
          - Set Deadline for Cut {'\n'}
          - Confirmat Access Allowed{'\n'}
        </Text>
        <Button title="Send out Job" onPress={this.createAccount} />
      </View>
    );
  }
}

export default JobConfirmations;
