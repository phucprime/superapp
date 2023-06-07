/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/Home/Home';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'Mismatch between JavaScript code version and Reanimated',
]);

AppRegistry.registerComponent(appName, () => App);
