import React, { Component } from 'react';

import Profile from '../components/supplier/Profile';

class SupplierDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Supplier Profile',
    headerTintColor: '#00aaf9',
    headerBackTitle: 'Back'
  });

  render() {
    return <Profile data={this.props.navigation.state.params.item} />;
  }
}

export default SupplierDetails;
