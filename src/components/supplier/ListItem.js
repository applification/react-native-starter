import React, { Component } from 'react';
import { Text, ListItem, Left, Right, Thumbnail, Body } from 'native-base';
import _ from 'lodash';

class SupplierListItem extends Component {
  render() {
    const item = this.props.data;
    const { name, location, cell } = item;
    const thumbnail = item.picture.thumbnail;
    const { navigate } = this.props.nav;
    return (
      <ListItem avatar onPress={() => navigate('supplierDetails', { item })}>
        <Left>
          <Thumbnail
            style={{ width: 50, height: 50 }}
            source={{ uri: thumbnail }}
          />
        </Left>
        <Body>
          <Text>{`${_.startCase(name.first)} ${_.startCase(name.last)}`}</Text>
          <Text note>
            {`${location.street} ${location.city} ${location.state} ${location.postcode}`}
          </Text>
        </Body>
        <Right>
          <Text note>{cell}</Text>
        </Right>
      </ListItem>
    );
  }
}

export default SupplierListItem;
