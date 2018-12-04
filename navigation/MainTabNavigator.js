import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CalculatorNavigator from './calculatorNavigator';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const CatchSelectorStack = createStackNavigator({
  CatchSelector: CalculatorNavigator,
});

CatchSelectorStack.navigationOptions = {
  tabBarLabel: 'Calculator',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calculator' : 'md-calculator'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CatchSelectorStack,
});
