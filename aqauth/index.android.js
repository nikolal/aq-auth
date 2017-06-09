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
import ForgotPassword from './src/components/forgotPassword/ForgotPassword.js'
import Profile from './src/components/profile/Profile.js'

export default class aqauth extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile />
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
