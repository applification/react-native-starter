/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import PropTypes from 'prop-types';
import { Content, Container } from 'native-base';

export default function CenterView(props) {
  return (
    <Container style={{ width: '100%' }}>
      <Content style={{ paddingTop: 15 }}>
        {props.children}
      </Content>
    </Container>
  );
}

CenterView.defaultProps = {
  children: null
};

CenterView.propTypes = {
  children: PropTypes.node
};
