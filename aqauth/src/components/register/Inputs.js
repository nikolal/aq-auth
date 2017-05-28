import React, { Component, PropTypes } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {

  state = {
    inputs:[
      {  key: 0, type: 'username', placeholder: 'Username', value: '', error: 'Username must be longer then 3 characters'},
      {  key: 1, type: 'email', placeholder: 'Email', value: '', error: 'Invalid Email'},
      {  key: 2, type: 'password', placeholder: 'Password', value: '', error: 'Password must be longer then 5 characters'},
    ],
    showError: false
  }

  updateInputValue = (key, text, state) => {
    const newInputs = state.inputs.slice()
    newInputs[key].value = text
    this.setState({ inputs: newInputs })
  }

  render() {
    const { inputs, showError } = this.state
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
                  onChangeText={(text) => this.updateInputValue(item.key, text, this.state)}
                />
                {
                  item.value.length < 4 && item.type === 'username' && showError === true && <Text style={styles.error}>{item.error}</Text>
                }
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