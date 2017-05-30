/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Register from './src/components/register/Register.js'
import Login from './src/components/login/Login.js'

export default class aqauth extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Register />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 54,
    flex: 1
  }
})

AppRegistry.registerComponent('aqauth', () => aqauth)
