import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CatchSelector from '../screens/catchSelector';
import CrabPotSelector from '../screens/crabPotSelector';
import FishSelector from '../screens/fishSelector';
import XPDisplay from '../screens/xpDisplay';
import Modifiers from '../screens/modifiers';

const SelectorStack = createStackNavigator({
  Selector: {screen: CatchSelector},
  CrabPot: {screen: CrabPotSelector},
  Fish: {screen: FishSelector},
  XP: {screen: XPDisplay},
  Modifiers: {screen: Modifiers},
});

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <SelectorStack />;
  }
}