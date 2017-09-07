/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('../__stories__/Supplier/ListItem');
  require('../__stories__/Supplier/Profile');
  require('../__stories__/Supplier/RegistrationForm');
  require('../__stories__/Supplier/RegistrationFormError');
}, module);

const StorybookUI = getStorybookUI({ port: 9001, host: 'localhost' });
AppRegistry.registerComponent('rnAppStarter', () => StorybookUI);
export default StorybookUI;
