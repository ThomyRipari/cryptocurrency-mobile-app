import { AppRegistry, Text } from 'react-native';
import { name as appName } from './app.json';

/* Import Component */
import App from './src';

AppRegistry.registerComponent(appName, () => App);