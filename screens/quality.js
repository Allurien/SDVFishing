import React from 'react';
import { ScrollView, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class Quality extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      difficulty: 3,
      name: '',
      imageName: '',
      type: Boolean
    }
    this.determineFishValue = this.determineFishValue.bind(this);
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount(){
    const { navigation } = this.props;
    const difficulty = navigation.getParam('difficulty', 1);
    const name = navigation.getParam('name', 'Legend');
    const type = navigation.getParam('type', false);
    const updatedDifficulty = Math.round(difficulty/3)
    const imageName = navigation.getParam('imageName', 'Legend');
    this.setState({difficulty: updatedDifficulty, name: name, imageName: imageName, type: type});
  }
  determineFishValue(quality){
    const fishXP =  this.state.difficulty + quality;
    this.props.navigation.navigate('Modifiers', {value: fishXP, name: this.state.name, imageName: this.state.imageName, type: this.state.type});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.mainTextContainer}>
            <Text style={styles.pageHeader}>
              What quality fish did you catch?
            </Text>
            <View style={styles.resultsContainer}>
              <TouchableOpacity onPress={()=>{this.determineFishValue(3)}} style={styles.resultBlocks}>
                <Image source={{uri: `https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/${this.state.imageName}.png`}} style={styles.fishImage}/>
                <Text style={styles.fishText}>
                    Basic
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.determineFishValue(6)}} style={styles.resultBlocks}>
                <ImageBackground source={{uri: `https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/${this.state.imageName}.png`}} style={styles.fishImage}>
                  <Image source={require('../assets/images/Silver.png')} style={styles.quality} />
                </ImageBackground>
                <Text style={styles.fishText}>
                    Silver
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.determineFishValue(9)}} style={styles.resultBlocks}>
                <ImageBackground source={{uri: `https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/${this.state.imageName}.png`}} style={styles.fishImage}>
                  <Image source={require('../assets/images/Gold.png')} style={styles.quality} />
                </ImageBackground>
                <Text style={styles.fishText}>
                    Gold
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}