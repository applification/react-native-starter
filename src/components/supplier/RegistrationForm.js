import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon
} from 'native-base';

class RegistrationForm extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel error>
              <Label>Username</Label>
              <Input />
              <Icon name="close-circle" />
            </Item>
            <Item fixedLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default RegistrationForm;
