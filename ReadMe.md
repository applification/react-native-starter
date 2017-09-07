# Three Amigo's Apps!

![Three Amigo Apps](__storeassets__/tta-icon.png)

## Recommended Visual Studio Code extensions	

- *React Native Storybook*
  https://marketplace.visualstudio.com/items?itemName=Orta.vscode-react-native-storybooks
  Enables Storybook inside VisualStudio IDE. Requires Storybook https://github.com/storybooks/storybook/tree/master/app/react-native

- *ESLint*
  https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
  There is a .eslintrc file which should give you nice red underline warnings about issues

- *Auto Tag Close*
  https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag 
  Just handy

- *JSON Tools*
  https://marketplace.visualstudio.com/items?itemName=eriklynd.json-tools
  Handy for formating JSON

- *Prettier ESLint*
  https://marketplace.visualstudio.com/items?itemName=RobinMalfait.prettier-eslint-vscode
  Will auto tidy up your code making it ES6 where sensible

- React Native Tools
  https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native
  I believe gives you some intellisense and other goodies


## App Configuration

- *Jest*

  The \__tests__ folder contains tests for actions and reducers using snapshots

- *Storybook*
  The \__stories__ folder contains Storybook components

- *Detox*
   ***Todo - not yet configured***

- *react-redux*
  Configured with redux:

  - ```src/actions```
  - ```src/reducers```
  - ```src/store```
  - ```src/screens/SupplierScreen.js``` shows a connected screen pulling data from api

- *react-navigation*
  TODO: 

  - ***add auth flow***
  - ***add tabs or drawer navigation***
  - ***integrate with redux***

- *redux-logger*
  If you open debug console you will see all Redux actions logged out

- *redux-persist*
  TODO: Need to configure to store API data for offline use

- *fetch-everywhere*
  The fetch that is bundled with React Native will not run our Nock tests properly, so we use this one instead

- native-base*
  I have ejected to make it easy to create our own styles in native-base-theme/variables folder

- react-native-google-analytics-bridge*
  Already configured, pulls ID from config.js and is integrated with react-navigation in the index.js files.

- react-native-maps*
  TODO: Installed but not done anything with it as yet

## Getting Started 

Install dependencies using yarn (it's quicker and caches nicely)

```yarn```

Then run as normal

```react-native run-ios```

```react-native run-android``` 

#### Running Tests

```npm t```

or to watch tests as you develop

```npm run test:watch``` 

#### Running Stories	

```npm run storybook``` 

If you configure the Visual Studio plugin you can then access from within the IDE (nb: simulator needs to be running and this is iOS only currently)

## Component Approach

If you look in SupplierScreen.js you see it makes use of a SupplierListItem component which takes care of the render of a single row in the list.

```src/components/supplier/ListItem.js```

It ~~has~~ WILL HAVE tests at:

```__tests__/components/ListItem.test.js``` 

It has a story at:

```__stories__/Supplier/ListItem.js``` 

A story flows nicely into a test so the design to code to QA flow is really nice.

## Continuous Deployment

The app is configured with Fastlane for automatic app store deployment. The configuration files are at:

```android/fastlane```

```ios/fastlane```

***TODO: Configure a branch for auto builds on GIT Pull Request***





