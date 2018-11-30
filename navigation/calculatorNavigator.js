import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CatchSelector from '../screens/catchSelector';
import FishSelector from '../screens/fishSelector';
import XPDisplay from '../screens/xpDisplay';
import Modifiers from '../screens/modifiers';
import Quality from '../screens/quality';

const SelectorStack = createStackNavigator({
  Selector: {screen: CatchSelector},
  Fish: {screen: FishSelector},
  XP: {screen: XPDisplay},
  Modifiers: {screen: Modifiers},
  Quality: {screen: Quality},
});

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <SelectorStack />;
  }
}