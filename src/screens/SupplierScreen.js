import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, StyleProvider } from 'native-base';
import { connect } from 'react-redux';

import * as actions from '../actions';

import SupplierListItem from '../components/supplier/ListItem';

import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

class SupplierScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Suppliers',
    headerTintColor: '#00aaf9',
    headerBackTitle: 'Back'
  });

  componentWillMount() {
    this.props.fetchSuppliers();
  }

  handleRefresh = () => {
    this.props.fetchSuppliers();
  };

  renderListItem(item) {
    return <SupplierListItem data={item} nav={this.props.navigation} />;
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content>
            <FlatList
              data={this.props.data}
              renderItem={({ item }) => this.renderListItem(item)}
              keyExtractor={item => item.email}
              refreshing={this.props.loading || false}
              onRefresh={this.handleRefresh}
              removeClippedSubviews={false}
            />
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.suppliers.loading,
    error: state.suppliers.error,
    data: state.suppliers.data
  };
}

export default connect(mapStateToProps, actions)(SupplierScreen);
