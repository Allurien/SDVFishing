import React from 'react';
import { ScrollView, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../assets/styles/mainStyles';

//TODO: Resolve issue with value not setting on first image press.


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

  setFishValue(){
    this.setState({fishValue: 30});
    console.log('fish value', this.state.fishValue);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text>
              Fish Selector
            </Text>
            <TouchableOpacity onPress={()=>{
              this.setState({fishValue: 30});
              console.log('fish value', this.state);
            }}>
              <Image
              style={{width: 48, height: 48}}
              source={{uri: 'https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/Albacore.png'}}
              />
            </TouchableOpacity>
            <Button onPress={() => {navigate('Modifiers', {value: this.state.fishValue});}} title='Add Modifiers' />
          </View>
        </ScrollView>
      </View>
    );
  }
}