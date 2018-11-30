import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../assets/styles/mainStyles';

class FishDisplay extends React.Component{
    constructor(props){
        super(props);
    }
    passFishValue(value){
        const { navigate } = this.props.navigation;
        navigate('Quality', {difficulty: this.props.difficulty, price: this.props.basePrice, name: this.props.fishName});
    }
    render(){
        return(
            <View style={styles.fishBlock}>
                <TouchableOpacity onPress={this.passFishValue.bind(this)}>
                <Image
                style={styles.fishImage}
                source={{uri: `https://s3.us-east-2.amazonaws.com/sdv-fishing/fish/${this.props.fishName}.png`}}
                />
                <Text style={styles.fishText}>
                    {this.props.fishName}
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default withNavigation(FishDisplay);