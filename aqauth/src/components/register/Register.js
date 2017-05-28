import React, { Component, propTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native'

import Inputs from './Inputs.js'

const Register = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./background.jpeg')}
        resizeMode='cover'
      />
      <View style={styles.containerText}>
        <Text style={styles.textRegister}>Register</Text>
        <Text style={styles.descriptionext}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Eum delectus incidunt at.
        </Text>
        <Inputs />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.bottomTextContainer}>
          <TouchableOpacity>
            <Text style={styles.bottomText}>Go to Login</Text>
          </TouchableOpacity>
          <Text style={styles.bottomText}>|</Text>
          <TouchableOpacity>
            <Text style={styles.bottomText}>Forgot Pasword</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default Register

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    backgroundColor: 'purple',
    opacity: 0.8,
  },
  containerText: {
    justifyContent: 'space-around',
    width: width,
    height: height,
    position: 'absolute',
    paddingVertical: 80,
    paddingHorizontal: 30,
    paddingBottom: 150
  },
  textRegister: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  descriptionext: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
    color: 'white',
    borderRadius: 50
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    height: 40,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomText: {
    color: 'white',
    fontSize: 15
  }
})