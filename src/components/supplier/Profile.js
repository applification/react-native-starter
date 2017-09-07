import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon
} from 'native-base';
import _ from 'lodash';

class Profile extends Component {
  render() {
    const { picture, email } = this.props.data;
    const { first, last } = this.props.data.name;
    return (
      <Card style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }}>
        <CardItem>
          <Left>
            <Thumbnail
              style={{ width: 50, height: 50 }}
              source={{ uri: picture.thumbnail }}
            />
            <Body>
              <Text>{_.startCase(first)} {_.startCase(last)}</Text>
              <Text note>{email}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            style={{ width: 250, height: 150, flex: 1 }}
            source={{ uri: picture.large }}
          />
        </CardItem>
        <CardItem>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
          <Text>11h ago</Text>
        </CardItem>
      </Card>
    );
  }
}

export default Profile;
