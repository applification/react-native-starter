/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Container from '../Container';
import SupplierListItem from '../../src/components/supplier/ListItem';

const supplier = {
  gender: 'male',
  name: {
    title: 'mr',
    first: 'masonme',
    last: 'walker'
  },
  location: {
    street: '9366 bairds road',
    city: 'upper hutt',
    state: 'west coast',
    postcode: 49293
  },
  email: 'mason.walker@example.com',
  login: {
    username: 'whitemouse414',
    password: 'lowell',
    salt: 'I1x0ZEtp',
    md5: '6167a2c479522db9f7befcc832e7ace8',
    sha1: '94e8cc37ceaaba2450cb97fe3e1f52d3b1ea5ab2',
    sha256: 'dbbebda09b08fb5d79073c637a799066c3f0b9dd7c09ac59f6189483fd6b6214'
  },
  dob: '1974-09-20 09:28:59',
  registered: '2007-02-24 02:51:20',
  phone: '(907)-186-0638',
  cell: '(737)-135-2392',
  id: {
    name: '',
    value: null
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/84.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/84.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/84.jpg'
  },
  nat: 'NZ'
};

storiesOf('Supplier', module)
  .addDecorator(getStory => <Container>{getStory()}</Container>)
  .add('List Item', () => <SupplierListItem data={supplier} nav={'n/a'} />);
