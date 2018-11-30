import React from 'react';
import { ScrollView, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class CatchSelector extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.mainTextContainer}>
            <Text style={styles.mainHeader}>
              What type of item did you catch?
            </Text>
            <View>
              <TouchableOpacity style={styles.selectorBlock} onPress={() => {navigate('XP', {value: 5, name: 'Crab Pot Item', image:'CrabPot'});}}>
                <Image
                style={styles.fishImage}
                source={require('../assets/images/CrabPot.png')}
                />
              </TouchableOpacity>
              <Text style={styles.pageHeader}>
                  Crab Pot Item
              </Text>
            </View>
            <View >
              <TouchableOpacity style={styles.selectorBlock} onPress={() => {navigate('XP', {value: 3, name: 'Trash/Algae', image:'Trash'});}}>
                <Image
                style={styles.fishImage}
                source={require('../assets/images/Trash.png')}
                />
                <Image
                style={styles.fishImage}
                source={require('../assets/images/Seaweed.png')}
                />
                <Image
                style={styles.fishImage}
                source={require('../assets/images/GreenAlgae.png')}
                />
                <Image
                style={styles.fishImage}
                source={require('../assets/images/WhiteAlgae.png')}
                />
              </TouchableOpacity>
              <Text style={styles.pageHeader}>
                Trash/Algae
              </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.selectorBlock} onPress={() => {navigate('Fish');}}>
                <Image
                style={styles.fishImage}
                source={require('../assets/images/Legend.png')}
                />
              </TouchableOpacity>
              <Text style={styles.pageHeader}>
                  Fish
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}