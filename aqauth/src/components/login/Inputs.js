import React, { Component, PropTypes } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import InputAuth from '../common/InputAuth.js'

const Inputs = ({ state, updateInputValue }) => {

    const { inputs, showError } = state
    return(
      <View>
        {
          inputs.map((item, index) => {
            return(
              <View key={item.key}>
                <InputAuth
                  placeholder={item.placeholder}
                  value={item.value}
                  secureTextEntry={item.type === 'password' ? true : false}
                  onChangeText={(text) => updateInputValue(item.key, text, state)}
                />
                {
                  item.value.length < 6 && item.type === 'password' && showError === true && <Text style={styles.error}>{item.error}</Text>
                }
              </View>
            )
          })
        }
      </View>
    )
  }

export default Inputs

const styles = StyleSheet.create({
  error: {
    color: 'red',
  }
})