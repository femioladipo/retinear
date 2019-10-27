import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Speech from 'react-native-speech';

import Dashboard from './components/Dashboard'
import Browser from './components/Browser'
import Account from './components/Account'

const TabNavigator = createBottomTabNavigator({
    Browser,
    Settings,
    Account,
});

export default createAppContainer(TabNavigator);
