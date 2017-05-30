import React, { Component, PropTypes } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Inputs = ({ state, updateInputValue }) => {

    const { inputs, showError } = state
    return(
      <View>
        {
          inputs.map((item, index) => {
            return(
              <View key={item.key}>
                <TextInput
                  style={styles.input}
                  placeholder={item.placeholder}
                  placeholderTextColor='white'
                  value={item.value}
                  secureTextEntry={item.type === 'password' ? true : false}
                  underlineColorAndroid="transparent"
                  autoCorerrect={false}
                  autoCapitalize="none"
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
  input: {
    textAlign: 'center',
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
    color: 'white',
    borderRadius: 50,
    marginTop: 10
  },
  error: {
    color: 'red',
  }
})