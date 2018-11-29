import React from 'react';
import { ScrollView, Text, View, Button, TouchableWithoutFeedback, Picker } from 'react-native';
import styles from '../assets/styles/mainStyles';

export default class Modifiers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemValue: 0,
      radioButton: 1
    }
  }
  static navigationOptions = {
    header: null,
  };
  componentDidMount(){
    const { navigation } = this.props;
    const value = navigation.getParam('value', 1);
    this.setState({itemValue: value});
    console.log('passed value', this.state.itemValue);
  }

  render() {
    const { navigate } = this.props.navigation;
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
              onValueChange={(radioValue) => {
                this.setState({radioButton: radioValue});
              }}
              mode={'dropdown'}
              >
              <Picker.Item label="No Modifier" value={1} />
              <Picker.Item label="Treasure" value={2.2} />
              <Picker.Item label="Perfect Catch" value={2.4} />
              <Picker.Item label="Legendary" value={5} />
            </Picker>
              </View>
            <Button onPress={() => {
              navigate('XP', {value: this.state.itemValue, modifier: this.state.radioButton});
            }
            } title='Total' />
          </View>
        </ScrollView>
      </View>
    );
  }
}