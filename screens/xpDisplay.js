import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class XPDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      passthroughValue: 0,
      modifier: 0
    }
  }
  static navigationOptions = {
    header: null,
  };
  async componentDidMount(){
    const { navigation } = this.props;
    const value = navigation.getParam('value', 'no value available');
    const modifiers = navigation.getParam('modifier', 'no modifier available');
    await this.setState({passthroughValue: value, modifier: modifiers});
    console.log('xp value', this.state.passthroughValue);
    console.log('modifier value', this.state.modifier);
  }

  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text>
              Your XP total is {this.state.passthroughValue}
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