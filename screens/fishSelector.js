import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../assets/styles/mainStyles';
import Fish from '../assets/fish.json';
import FishDisplay from '../components/fishDisplay';


export default class FishSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fishValue: 0
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.mainTextContainer}>
            <Text style={styles.pageHeader}>
              Select the fish you caught
            </Text>
            <View style={styles.fishContainer}>
              {Fish.map(fish => {
                return <FishDisplay key={fish.id} fishName={fish.name} difficulty={fish.difficulty} price={fish.basePrice} />
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}