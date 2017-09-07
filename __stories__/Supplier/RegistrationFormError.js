import React from 'react';

import { storiesOf } from '@storybook/react-native';

import Container from '../Container';
import RegistrationForm from '../../src/components/supplier/RegistrationForm';

storiesOf('Supplier', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('Error Registration Form', () => <RegistrationForm />);
