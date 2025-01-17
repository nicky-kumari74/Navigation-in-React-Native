/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import stack from './StackNav';
import tab from './TabNav';
AppRegistry.registerComponent(appName, () => tab);
