import React from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class XPDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemValue: 0,
      modifier: 1,
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
    this.setState({itemValue: value, modifier: modifiers});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text>
              Your XP total is {this.state.itemValue * this.state.modifier}
            </Text>
            <Button onPress={() => {navigate('Selector');}} title='Add Another Item' />
          </View>
        </ScrollView>
      </View>
    );
  }
}