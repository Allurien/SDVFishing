import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class CrabPotSelector extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text>
              Crab Pot Selector
            </Text>
            <Button onPress={() => navigate('CrabPot')} title='Crab Pot Item' />
            <Button onPress={() => navigate('XP')} title='Trash' />
            <Button onPress={() => navigate('Fish')} title='Fish' />
          </View>
        </ScrollView>
      </View>
    );
  }
}