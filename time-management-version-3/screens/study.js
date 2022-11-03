import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Fitness extends Component {
  constructor() {
    super();
    this.state = {
      dateInfo: '',
      numberOfMin: "",
    };
  }

  addData = async (dateInfo, numberOfMin) => {
    db.collection('study').add({
      Date: dateInfo,
      Time: numberOfMin,
    });
  };

  render() {
    const { dateInfo, numberOfMin } = this.state;

    return (
      <View>
        <TextInput
          style={styles.textinput}
          placeholder={'Date When you Studied'}
          value={dateInfo}
          onChangeText={(text) => this.setState({ dateInfo: text })}
        />

        <TextInput
          style={styles.textinput}
          placeholder={'No. of Minutes Studied'}
          value={numberOfMin}
          onChangeText={(value) => this.setState({ numberOfMin: value })}
        />

        <TouchableOpacity
         style={styles.button}
         onPress={() => this.addData(dateInfo, numberOfMin)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '90%',
    height: 50,
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: '#f6f6f6',
    fontFamily: 'Rajdhani_600SemiBold',
    color: "black",
  },
  button: {
    width: "30%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c4c4",
    borderRadius: 15
  },
});
