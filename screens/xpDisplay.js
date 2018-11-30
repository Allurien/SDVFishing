import React from 'react';
import { ScrollView, Text, View, Button, Image } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class XPDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemValue: 0,
      modifier: 1,
      name: '',
      image: '',
    }
  }
  static navigationOptions = {
    header: null,
  };
  async componentDidMount(){
    await this.addValues();
  }
  addValues(){
    const { navigation } = this.props;
    const value = navigation.getParam('value', 1);
    const modifiers = navigation.getParam('modifier', 1);
    const name = navigation.getParam('name', 'Legend');
    const image = navigation.getParam('image', 'Legend');
    this.setState({itemValue: value, modifier: modifiers, name: name, image: image});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainTextContainer}>
            <Text style={styles.mainHeader}>
              Results
            </Text>
            <Image
                style={styles.fishImage}
                source={{uri: `https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/${this.state.image}.png`}}
                />
          <Text style={styles.mainText}>
          Your {this.state.name} is worth {Math.round(this.state.itemValue * this.state.modifier)} XP
          </Text>
          <Button onPress={() => {navigate('Selector');}} title='Add Another Item' />
          </View>
          <View style={styles.resultsContainer}>
            <View style={styles.resultBlocks}>
              <Text style={styles.resultHeader}>
                {Math.round(this.state.itemValue * this.state.modifier)}
              </Text>
              <Text style={styles.resultHeader}>
                Session XP
              </Text>
            </View>
            <View style={styles.resultBlocks}>
              <Text style={styles.resultHeader}>
                {Math.round(this.state.itemValue * this.state.modifier)}
              </Text>
              <Text style={styles.resultHeader}>
                Lifetime XP
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}