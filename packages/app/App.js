import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Speech from 'react-native-speech';

import Settings from './components/Settings'
import Browser from './components/Browser'

const TabNavigator = createBottomTabNavigator({
    Browser,
    Settings,
});

export default createAppContainer(TabNavigator);
