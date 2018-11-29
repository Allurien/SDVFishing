import React from 'react';
import { ScrollView, Text, View, Button, TouchableWithoutFeedback, Picker } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class Modifiers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      passthroughValue: 0,
      radioButton: 'basevalue'
    }
  }
  static navigationOptions = {
    header: null,
  };
  async componentDidMount(){
    const referrer = this.props.navigation.getParam('referrer', 'no referrer available');
    if(referrer === 'Trash'){
      await this.setState({passthroughValue: 3})
      console.log('value', this.state.passthroughValue);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log("RADIO STATE: \n", this.state.radioButton);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text>
              Did you have any catch modifiers?
            </Text>
            <View>
            <Picker
              selectedValue={this.state.radioButton}
              style={{ height: 50, width: 250 }}
              onValueChange={(itemValue) => {
                console.log('radio value', itemValue)
                this.setState({radioButton: itemValue})
              }}
              mode={'dropdown'}
              >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
              </View>
            <Button onPress={() => navigate('CrabPot')} title='Crab Pot Item' />
            <Button onPress={() => {
              // console.log("RADIOMOD TO PASS: \n", this.state.radioButton);
              navigate('XP', {value: this.state.passthroughValue, modifier: this.state.radioButton})
            }
            } title='Total' />
          </View>
        </ScrollView>
      </View>
    );
  }
}