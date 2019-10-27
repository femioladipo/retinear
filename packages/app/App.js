import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Speech from 'react-native-speech';

import Account from './components/Account'
import Browser from './components/Browser'

const TabNavigator = createBottomTabNavigator({
    'About Us': Account,
    Browser,
});

export default createAppContainer(TabNavigator);
