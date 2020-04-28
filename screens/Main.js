import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class Main extends Component {
  onPress = () => {
    this.props.navigation.navigate('Chat');
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Canal Aberto</Text>
        </TouchableOpacity>
      </View>
    ) ;
  }
}

const offset = 24;
const styles = StyleSheet.create({
  buttonText: {
    marginLeft: offset,
    fontSize: offset
  }
});

export default Main;
