import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './home';
import SettingScreen from './settings';
import CanvasScreen from './canvas';

const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Canvas: CanvasScreen,
  Settings: SettingScreen               

})

export default createAppContainer (tabNavigator)