import React from 'react';
import { ScrollView, Text, View, Button, Picker, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class Modifiers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemValue: 0,
      radioButton: 1,
      name: '',
      imageName: '',
      type: Boolean
    }
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount(){
    const { navigation } = this.props;
    const value = navigation.getParam('value', 1);
    const name = navigation.getParam('name', 'Legend');
    const imageName = navigation.getParam('imageName', 'Legend');
    const type = navigation.getParam('type', false);
    this.setState({itemValue: value, name:name, imageName: imageName, type: type});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.mainTextContainer}>
            <Text style={styles.pageHeader}>
              Did you have any catch modifiers?
            </Text>
            <View style={styles.resultsContainer}>
              <TouchableOpacity onPress={()=>{navigate('XP', {value: this.state.itemValue, modifier: 1, name: this.state.name, image: this.state.name});}} style={styles.resultBlocks}>
                <Image source={{uri: `https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/${this.state.imageName}.png`}} style={styles.fishImage}/>
                <Text style={styles.fishText}>
                    None
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigate('XP', {value: this.state.itemValue, modifier: 2.2, name: this.state.name, image: this.state.name});}} style={styles.resultBlocks}>
                <ImageBackground source={{uri: `https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/${this.state.imageName}.png`}} style={styles.fishImage}>
                  <Image source={require('../assets/images/Treasure.png')} style={styles.quality} />
                </ImageBackground>
                <Text style={styles.fishText}>
                    Treasure
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigate('XP', {value: this.state.itemValue, modifier: 2.4, name: this.state.name, image: this.state.name});}} style={styles.resultBlocks}>
                <ImageBackground source={{uri: `https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/${this.state.imageName}.png`}} style={styles.fishImage}>
                  <Image source={require('../assets/images/Perfect.png')} style={styles.quality} />
                </ImageBackground>
                <Text style={styles.fishText}>
                    Perfect
                </Text>
              </TouchableOpacity>
              {this.state.type &&
                <TouchableOpacity onPress={()=>{navigate('XP', {value: this.state.itemValue, modifier: 5, name: this.state.name, image: this.state.name});}} style={styles.resultBlocks}>
                  <ImageBackground source={{uri: `https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/${this.state.imageName}.png`}} style={styles.fishImage}>
                    <Image source={require('../assets/images/Legendary.png')} style={styles.quality} />
                  </ImageBackground>
                  <Text style={styles.fishText}>
                      Legendary
                  </Text>
                </TouchableOpacity>
              }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}