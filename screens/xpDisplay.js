import React from 'react';
import { ScrollView, Text, View, Button, Image, AsyncStorage } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class XPDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemValue: 0,
      modifier: 1,
      name: '',
      image: '',
      itemXP: 0,
      session: 0,
      lifetime: 0
    }
    this.addValues = this.addValues.bind(this);
    this.updateStoredXP = this.updateStoredXP.bind(this);
    this.resetXP = this.resetXP.bind(this);
  }
  static navigationOptions = {
    header: null,
  };
  async componentDidMount(){
    await this.addValues().then(
      this.updateStoredXP()
    )
  }
  async addValues(){
    const { navigation } = this.props;
    const value = navigation.getParam('value', 1);
    const modifiers = navigation.getParam('modifier', 1);
    const name = navigation.getParam('name', 'Legend');
    const image = navigation.getParam('image', 'Legend');
    const itemXP = Math.round(value * modifiers);
    await this.setState({itemValue: value, modifier: modifiers, name: name, image: image, itemXP: itemXP});
  }

  async updateStoredXP(){
    let values = {};
    await AsyncStorage.getItem('XP', (err, result) => {
      values = JSON.parse(result);
      console.log('values', values);
    })
    if(values.lifetime===undefined || values.session===undefined){
      const newXP = {
        session: 0 + this.state.itemXP,
        lifetime: 0 + this.state.itemXP
      };
      await AsyncStorage.setItem('XP', JSON.stringify(newXP), () => {
        this.setState({session: newXP.session, lifetime: newXP.lifetime});
      });
      return;
    }
    const newXP = {
      session: values.session + this.state.itemXP,
      lifetime: values.lifetime + this.state.itemXP
    }
    AsyncStorage.setItem('XP', JSON.stringify(newXP), () => {
      this.setState({session: newXP.session, lifetime: newXP.lifetime});
    });
  }

  resetXP(type){
    if(type === 'session'){
      AsyncStorage.setItem('XP', JSON.stringify({session: 0, lifetime: this.state.lifetime}), () => {
        this.setState({session: 0});
      });
    }
    if(type === 'lifetime'){
      AsyncStorage.setItem('XP', JSON.stringify({session: 0, lifetime: 0}), () => {
        this.setState({session: 0, lifetime: 0});
      });
    }
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
          Your {this.state.name} is worth {Math.round(this.state.itemXP)} XP
          </Text>
          <Button onPress={() => {navigate('Selector');}} title='Add Another Item' />
          </View>
          <View style={styles.resultsContainer}>
            <View style={styles.resultBlocks}>
              <Text style={styles.resultHeader}>
                {Math.round(this.state.session)}
              </Text>
              <Text style={styles.resultHeader}>
                Session XP
              </Text>
              <Button onPress={()=>{this.resetXP('session')}} title='Reset'></Button>
            </View>
            <View style={styles.resultBlocks}>
              <Text style={styles.resultHeader}>
                {Math.round(this.state.lifetime)}
              </Text>
              <Text style={styles.resultHeader}>
                Lifetime XP
              </Text>
              <Button onPress={()=>{this.resetXP('lifetime')}} title='Reset'></Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}