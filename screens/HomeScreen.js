import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import styles from '../assets/styles/mainStyles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Image
        style={styles.headerImage}
        source={require('../assets/images/MainLogo.png')}/>
          <View style={styles.mainTextContainer}>
            <Text style={styles.mainHeader}>Fishing Calculator</Text>
            <Text style={styles.mainText}>
              This app will help you track the amount of XP your fishing haul is worth.
            </Text>
            <Text style={styles.mainText}>Get started by clicking the Calculator button at the bottom of the screen!</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}