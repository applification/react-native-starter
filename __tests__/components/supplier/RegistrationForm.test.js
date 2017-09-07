import React from 'react';
import renderer from 'react-test-renderer';

import RegistrationForm
  from '../../../src/components/supplier/RegistrationForm';

describe('SUPPLIER LIST ITEM COMPONENT', () => {
  it('renders a Registration Form Compoment', () => {
    expect(renderer.create(<RegistrationForm />)).toMatchSnapshot();
  });
});
